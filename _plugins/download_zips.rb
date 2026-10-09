# Builds a starter-project zip for every folder under `_downloads`, so
# only the files themselves need committing - the zips are generated
# fresh on every build and can never fall out of step with them.
#
# `_downloads/<project>/<name>/` becomes `assets/zip/<project>/<name>.zip`
# in the built site, with everything inside a top-level `<name>/` folder
# so unzipping it gives a single tidy folder rather than loose files.
require "zip"

module GravesendCodeClub
  DOWNLOADS_DIR = "_downloads".freeze

  # Junk that operating systems and Python leave lying around, which
  # shouldn't end up in a download.
  IGNORED_NAMES = %w[.DS_Store __pycache__].freeze

  # A StaticFile (rather than writing the zip from a hook) so Jekyll knows
  # the zip belongs in the site - otherwise `jekyll serve`'s cleanup step
  # would delete it from `_site` on every rebuild.
  class DownloadZip < Jekyll::StaticFile
    def initialize(site, project, folder)
      @folder = folder
      super(site, site.source, File.join("assets", "zip", project), "#{File.basename(folder)}.zip")
    end

    # StaticFile reads the source file's mtime from here. There's no zip
    # in the source to point at, so point at the folder it's built from.
    def path
      @folder
    end

    def write(dest)
      dest_path = destination(dest)
      FileUtils.mkdir_p(File.dirname(dest_path))

      # Built in memory and written in one go, rather than with
      # Zip::File (which writes to a temp file then renames it - and that
      # rename can fail if `jekyll serve` rebuilds twice in quick
      # succession).
      name = File.basename(@folder)
      buffer = Zip::OutputStream.write_buffer do |zip|
        files.each do |file|
          zip.put_next_entry(File.join(name, file))
          zip.write(File.binread(File.join(@folder, file)))
        end
      end
      File.binwrite(dest_path, buffer.string)
      true
    end

    private

    # Every file in the folder, relative to it, in a stable order.
    def files
      Dir.glob("**/*", File::FNM_DOTMATCH, base: @folder).sort.select do |file|
        File.file?(File.join(@folder, file)) &&
          (file.split("/") & IGNORED_NAMES).empty?
      end
    end
  end

  class DownloadZipGenerator < Jekyll::Generator
    safe true

    def generate(site)
      Dir.glob(File.join(site.source, DOWNLOADS_DIR, "*", "*", "")).sort.each do |folder|
        folder = folder.chomp("/")
        project = File.basename(File.dirname(folder))
        site.static_files << DownloadZip.new(site, project, folder)
      end
    end
  end
end
