# Gravesend Code Club

The website for Gravesend Code Club, built with [Jekyll](https://jekyllrb.com)
using the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)
theme.

Live at <https://gravesend-code-club.viboko.dev>.

## Running locally

Install dependencies:

```bash
just install
```

Then start the dev server:

```bash
just dev
```

The site will be available at <http://localhost:4000>.

## Checks

The `ci` GitHub Actions workflow runs three independent checks on every push
and pull request: `just lint`, `just check-accessibility`, and
`just check-security`.

### Linting

```bash
just lint
```

Lints YAML (`eslint-plugin-yml`), Markdown (`markdownlint`), SCSS
(`stylelint`), JavaScript (`eslint`), the built HTML (`html-proofer`,
checking internal links/images/anchors), and SEO basics (`robots.txt`,
`sitemap.xml`, absolute OG/canonical URLs).

### Accessibility

```bash
just check-accessibility
```

Checks accessibility with `pa11y-ci` (WCAG2AA, against every page in the
sitemap) and Lighthouse. Both build the site and serve it locally to run
against. `just check-pa11y` ignores duplicate-id errors from the
third-party `scratchblocks` widget used in tutorial posts (tracked
separately, not something this repo controls); a new error type on any
page still fails the check.

If `just check-pa11y` fails locally with a Chrome `dlopen` error, the
Chrome build that `pa11y-ci`'s Puppeteer dependency downloaded is corrupt -
delete `~/.cache/puppeteer` and re-run `just install`, or set
`PUPPETEER_EXECUTABLE_PATH` to an existing Chrome install.

### Security

```bash
just check-security
```

Checks dependencies for known vulnerabilities with `bundler-audit`
(Ruby gems, against the [ruby-advisory-db](https://github.com/rubysec/ruby-advisory-db))
and [`osv-scanner`](https://google.github.io/osv-scanner/) (Ruby and npm
lockfiles, against the [OSV database](https://osv.dev)). `osv-scanner`
isn't managed by `just install` - install it separately, e.g.
`brew install osv-scanner`.

Vulnerabilities that don't apply (e.g. dev-only tooling with no fix
available) are suppressed with a reason in [`osv-scanner.toml`](osv-scanner.toml)
rather than silently ignored.

Separately, [Dependabot](.github/dependabot.yml) opens a PR weekly for any
outdated Ruby gem, npm package, or GitHub Action.
