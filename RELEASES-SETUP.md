# Common iO releases repository — local plan

Target: `https://github.com/ioditor/io-releases`. This is a proposed destination; existence and ownership have not been verified. No repository or release was created by this task.

1. When authorized, create the public `io-releases` repository under the confirmed `ioditor` account/organization. Copy the template contents to its root and review before its first push.
2. The repository is a distribution hub for Zero, iO ditor, Journal and Paper. Keep application source and binary files out of Git; attach binaries to GitHub Releases.
3. Create a release with a product-prefixed tag: `ioditor-v<version>`, `zero-v<version>`, `journal-v<version>`, or `paper-v<version>`. Confirm versions from application build metadata. Numbers such as `ioditor-v0.3.47` and `journal-v0.3.1` are naming examples only, not assertions of current releases.
4. Upload the tested assets and `SHA256SUMS.txt`. Compute SHA256 from the final bytes (PowerShell: `Get-FileHash -Algorithm SHA256 -LiteralPath <asset>`). Never invent hashes. Check downloaded assets against the published checksum file before enabling buttons.
5. Edit `data/downloads.json` in the website: set product version and tag, platform status to `available`, exact asset filename, exact URL and checksum when published. Direct URL format: `https://github.com/ioditor/io-releases/releases/download/<product-tag>/<asset-filename>`. A product-specific release page may use `/releases/tag/<product-tag>`.
6. Update matching EN/RU static buttons on product pages and both Downloads pages using the same exact URLs. The JSON is a maintenance source of truth; there is deliberately no runtime JavaScript renderer. Updating JSON alone does not update HTML. Keep unavailable platforms as Coming soon / Скоро with no href.
7. Validate both languages, assets, download URLs and checksums. Review the website diff, commit locally, then push only when approved.

Never use `/releases/latest` or `/releases/latest/download/...` for a product: a shared repository mixes releases of different products. Always use the product's exact tag/asset. Update the template manifest and website manifest together when publishing a new release.

No public repository link is rendered on the current site. Add it only after the repository is confirmed live. Current versions and URLs remain null because source packages do not confirm an intended public binary release.
