### 🟪  user.js
A `user.js` is a configuration file that can control hundreds of Firefox settings. For a more technical breakdown and explanation, you can read more on the [overview](https://github.com/arkenfox/user.js/wiki/1.1-Overview) wiki page.

### 🟩  the arkenfox user.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The `arkenfox user.js` is a **template** which aims to provide as much privacy and enhanced security as possible, and to reduce tracking and fingerprinting as much as possible - while minimizing any loss of functionality and breakage (but it will happen).

Everyone, experts included, should at least read the [implementation](https://github.com/arkenfox/user.js/wiki/1.3-Implementation) wiki page, as it contains important information regarding a few `user.js` settings.

Note that we do *not* recommend connecting over Tor on Firefox. Use the [Tor Browser](https://www.torproject.org/projects/torbrowser.html.en) if your [threat model](https://www.torproject.org/about/torusers.html.en) calls for it, or for accessing hidden services. 

Also be aware that the `arkenfox user.js` is made specifically for desktop Firefox. Using it as-is in other Gecko-based browsers can be counterproductive, especially in the Tor Browser.

### 🟧  sitemap

 - [Releases](https://github.com/arkenfox/user.js/releases)
 - [changelogs](https://github.com/arkenfox/user.js/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Achangelog)
 - [Wiki](https://github.com/arkenfox/user.js/wiki)
 - [stickies](https://github.com/arkenfox/user.js/issues?q=is%3Aissue+is%3Aopen+label%3A%22sticky+topic%22)
 - [diffs](https://github.com/arkenfox/user.js/issues?q=is%3Aissue+label%3Adiffs)

### 🟥  acknowledgments
Literally thousands of sources, references and suggestions. Many thanks, and much appreciated.


### 🟦 What is this?

This is a branch I use on my desktop.

#### Addons
I have made some changes to this `user.js` that would possibly be considered unsafe.

The intent is to use this `user.js` with some of the [extensions mentioned on the wiki](https://github.com/ghacksuserjs/ghacks-user.js/wiki/4.1-Extensions).

The current extensions I am using:

| **Extension**                                                                                  | **Source**                                                     | **Main Purpose**                                                                                                                 | Extra Settings                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ClearURLs](https://addons.mozilla.org/addon/clearurls/)                                       | [Source](https://gitlab.com/KevinRoebert/ClearUrls)            | Remove tracking elements from URLs                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [CSS Exfil Protection](https://addons.mozilla.org/addon/css-exfil-protection/)                 | [Source](https://github.com/mlgualtieri/CSS-Exfil-Protection)  | Protect against [css exfil vulnerability](https://www.mike-gualtieri.com/css-exfil-vulnerability-tester)                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Firefox Multi-Account Containers](https://addons.mozilla.org/addon/multi-account-containers/) | [Source](https://github.com/mozilla/multi-account-containers)  | [Stay logged in](https://medium.com/@stoically/enhance-your-privacy-in-firefox-with-temporary-containers-33925cd6cd21)           | Add for sites I use                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [HTTPS Everywhere](https://addons.mozilla.org/addon/https-everywhere/)                         | [Source](https://github.com/EFForg/https-everywhere)           | Prefer [HTTPS](https://en.wikipedia.org/wiki/HTTPS)                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Redirect AMP to HTML](https://addons.mozilla.org/addon/amp2html/)                             | [Source](https://github.com/da2x/amp2html)                     | Prefer [decentralized web](https://www.daniel.priv.no/web-extensions/amp2html.html)                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Temporary Containers](https://addons.mozilla.org/addon/temporary-containers/)                 | [Source](https://github.com/stoically/temporary-containers)    | Prevent cache fingerprinting ([ETags](https://en.wikipedia.org/wiki/HTTP_ETag#Tracking_using_ETags) etc), isolate/delete cookies | Automatic Mode, Random Container Color, Reuse availible numbers, [Set Global Isolation rules](#global-isolation)                                                                                                                                                                                                                                                                                                                                              |
| [Tree Style Tab](https://addons.mozilla.org/addon/tree-style-tab/)                             | [Source](https://github.com/piroor/treestyletab)               | Useable web browsing                                                                                                             | Hide ["Tree Style Tab"](https://github.com/piroor/treestyletab/wiki/Code-snippets-for-custom-style-rules#hide-the-tree-style-tab-header-at-the-top-of-the-sidebar), also other [userChrome.css options](#userchrome-options), and TST [preferences](#tst-preferences)                                                                                                                                                                                         |
| [Tridactyl](https://addons.mozilla.org/addon/tridactyl-vim/)                                   | [Source](https://github.com/tridactyl/tridactyl)               | Efficient keyboard driven browsing                                                                                               | Install the [native messenger](https://github.com/tridactyl/tridactyl/blob/master/src/static/clippy/7-native_messenger.md), should use [AppArmor](https://en.wikipedia.org/wiki/AppArmor) to prevent things like [1](http://o.blanthorn.com/blog/2019/07/02/the-tridactyl-keypress-security-bug/), [2](https://github.com/tridactyl/tridactyl/security/advisories/GHSA-7qr7-93pf-hr8f) (it's a good idea anyway regardless of whether you use this extension) |
| [uBlock Origin](https://addons.mozilla.org/addon/ublock-origin/)                               | [Source](https://github.com/gorhill/uBlock)                    | Filtering                                                                                                                        | Enable [dynamic filtering](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering) with [hard mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-hard-mode)                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                      |
| [Violentmonkey](https://addons.mozilla.org/addon/violentmonkey/)                               | [Source](https://github.com/violentmonkey/violentmonkey)       | [Various scripts used with Violentmonkey](#various-scripts-used-with-violentmonkey)                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Global Isolation
[Temporary Containers wiki article](https://github.com/stoically/temporary-containers/wiki/Global-Isolation):

- Navigating in Tabs should open new Temporary Containers
  - Different from Tab Domain
- Mouse Clicks on Links should open new Temporary Containers
  - Middle Mouse
    - Different from Tab Domain & Subdomains
  - Ctrl/Cmd+Left Mouse
    - Always
  - Left Mouse
    - Different from Tab Domain

#### Various scripts used with Violentmonkey
- [Disable Youtube autoplay](https://greasyfork.org/en/scripts/34651-disable-youtube-autoplay)
- [Old Reddit Please!](https://greasyfork.org/en/scripts/40897-old-reddit-please)
- [viewimage.user.js](https://gist.github.com/bijij/58cc8cfc859331e4cf80210528a7b255/#file-viewimage-user-js)
- [yt2invidio.user.js](https://codeberg.org/izzy/userscripts/src/branch/master/yt2invidio.user.js)

#### Configure once off search engines and keywords

More [info](https://www.ghacks.net/2016/08/09/firefox-one-off-searches-address-bar).

#### Userchrome options
```
@namespace url("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul");

/* Remove default items from the urlbar-container */
#back-button,
#forward-button,
#stop-reload-button,
#reload-button,
#customizableui-special-spring1,
#home-button,
#customizableui-special-spring2,
#library-button,
#sidebar-button {
    display:none;
}

/* Disable Tab toolbar for Tree Style Tab */
#tabbrowser-tabs {
    visibility: collapse !important;
}

#sidebar-header {
    display: none;
}
```

#### TST Preferences
- Tree Behavior
  - ☐ "When a new tree appears, collapse others automtically"
  - ☐ "When a tab gets focus, expand its tree and collapse others automatically"
  - ☐ "Except focus moving caused by current tab closing"
  - ☑️ "Double-click on a tab to collapse/expand tree"
