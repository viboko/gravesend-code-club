# Generates a `<slug>-print` page alongside every post and project
# write-up (skips session round-up posts, which aren't step-by-step content
# anyone would print). Each print page shares the same Markdown source as
# its post, rendered through the leaner `post-print` layout - no masthead,
# nav or sidebar - so it can be printed straight from the browser without
# the screen chrome or needing extra CSS/JS gymnastics to look right on
# paper.
#
# The print page is a sibling file (`2026/.../foo-print.html`), not
# `2026/.../foo/print/index.html`: posts are permalinked to a flat `.html`
# file, so a `foo/` directory sitting next to `foo.html` is ambiguous for a
# request to `/foo` (with no trailing slash) - some servers resolve it to
# the file, others treat it as a directory and 404 or serve a listing.
module GravesendCodeClub
  PRINTABLE_LAYOUTS = %w[post project].freeze

  class PrintPage < Jekyll::PageWithoutAFile
    def initialize(site, post)
      dir = File.dirname(post.url.sub(%r{\A/}, ""))
      name = "#{File.basename(post.url)}-print.md"
      super(site, site.source, dir, name)

      self.content = post.content
      self.data = post.data.merge(
        "layout" => "post-print",
        "sitemap" => false
      )
    end
  end

  class PrintPageGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      site.posts.docs.each do |post|
        next unless PRINTABLE_LAYOUTS.include?(post.data["layout"])

        site.pages << PrintPage.new(site, post)
      end
    end
  end
end
