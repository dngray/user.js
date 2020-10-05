/* 0102: set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
 * [NOTE] Session Restore is not used in PB mode (0110) and is cleared with history (2803, 2804)
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 3);

/* 0302b: disable auto-INSTALLING extension and theme updates (after the check in 0301b)
 * [SETTING] about:addons>Extensions>[cog-wheel-icon]>Update Add-ons Automatically (toggle) ***/
user_pref("extensions.update.autoUpdateDefault", true);

/* 1602: ALL: control the amount of information to send
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port ***/
user_pref("network.http.referer.trimmingPolicy", 1); // [DEFAULT: 0]

/* 1604: CROSS ORIGIN: control the amount of information to send [FF52+]
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 1); // [DEFAULT: 0]

/* 2703: delete cookies and site data on close
 * 0=keep until they expire (default), 2=keep until you close Firefox
 * [NOTE] The setting below is disabled (but not changed) if you block all cookies (2701 = 2)
 * [SETTING] Privacy & Security>Cookies and Site Data>Delete cookies and site data when Firefox is closed ***/
user_pref("network.cookie.lifetimePolicy", 0);

/* 2730: disable offline cache ***/
user_pref("browser.cache.offline.enable", true);

/* 2803: set what items to clear on shutdown (if 2802 is true) [SETUP-CHROME]
 * [NOTE] If 'history' is true, downloads will also be cleared regardless of the value
 * but if 'history' is false, downloads can still be cleared independently
 * However, this may not always be the case. The interface combines and syncs these
 * prefs when set from there, and the sanitize code may change at any time
 * [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes>Settings ***/
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.history", false); // Browsing & Download History
user_pref("privacy.clearOnShutdown.offlineApps", false); // Offline Website Data

/* [SECTION 5000]: PERSONAL
 * WELCOME & WHAT's NEW NOTICES ***/
user_pref("startup.homepage_welcome_url", "");

/* APPEARANCE ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] allow userChrome/userContent

/* UX FEATURES: disable and hide the icons and menus ***/
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New [FF69+]
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("identity.fxaccounts.enabled", true); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("reader.parse-on-load.enabled", true); // Reader View

/* 5001: Arrange addon buttons to be how I like them ***/
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[\"_74145f27-f039-47ce-a470-a662b129930a_-browser-action\",\"_7fc8ef53-24ec-4205-87a4-1e745953bb0d_-browser-action\",\"https-everywhere_eff_org-browser-action\",\"_aecec67f-0d10-4fa7-b7c7-609a2db280cf_-browser-action\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"customizableui-special-spring1\",\"urlbar-container\",\"customizableui-special-spring2\",\"downloads-button\",\"library-button\",\"sidebar-button\",\"_c607c8df-14a7-4f28-894f-29e8722976af_-browser-action\",\"_testpilot-containers-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"fxa-toolbar-menu-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\"],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"developer-button\",\"_74145f27-f039-47ce-a470-a662b129930a_-browser-action\",\"_7fc8ef53-24ec-4205-87a4-1e745953bb0d_-browser-action\",\"_testpilot-containers-browser-action\",\"https-everywhere_eff_org-browser-action\",\"_c607c8df-14a7-4f28-894f-29e8722976af_-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"_aecec67f-0d10-4fa7-b7c7-609a2db280cf_-browser-action\"],\"dirtyAreaCache\":[\"nav-bar\",\"toolbar-menubar\",\"TabsToolbar\",\"PersonalToolbar\",\"widget-overflow-fixed-list\"],\"currentVersion\":16,\"newElementCount\":7}");

/* 5002: Turn off previews when tabbing ***/
user_pref("browser.ctrlTab.recentlyUsedOrder", false);

/* 5003: Lazy loading: Tridactyl cannot capture key presses until web pages are loaded. ***/
user_pref("browser.sessionstore.restore_tabs_lazily", false);

/* 5004: disable (or setup) DNS-over-HTTPS (DoH) [FF60+]
 * TRR = Trusted Recursive Resolver
 * 0=off by default, 1=race (removed in FF69), 2=TRR first, 3=TRR only,
 * 4=race for stats but always use native result (removed in FF69), 5=explicitly off
 * [WARNING] DoH bypasses hosts and gives info to yet another party (e.g. Cloudflare)
 * [1] https://www.ghacks.net/2018/04/02/configure-dns-over-https-in-firefox/
 * [2] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 *
 * This is only disabled because I have DNSCrypt running on the router forwarding all
 * requests over the VPN to a variety of DoH and DNSCrypt providers. When roaming I
 * always have VPN up.
 ***/
user_pref("network.trr.mode", 0);
user_pref("network.trr.bootstrapAddress", "");
user_pref("network.trr.uri", "");
