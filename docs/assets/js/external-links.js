// External Links Handler
document.addEventListener('DOMContentLoaded', function() {
    // Get the current domain
    const currentDomain = window.location.hostname;

    // Function to check if a URL is external
    function isExternalLink(url) {
        try {
            const link = new URL(url, window.location.origin);
            return link.hostname !== currentDomain;
        } catch (e) {
            // If URL parsing fails, assume it's internal
            return false;
        }
    }

    // Function to process all links
    function processLinks() {
        const links = document.querySelectorAll('a[href]');

        links.forEach(link => {
            const href = link.getAttribute('href');

            // Skip if already has target="_blank" or is a relative/internal link
            if (link.getAttribute('target') === '_blank') {
                return;
            }

            // Skip anchor links, mailto, tel, etc.
            if (href.startsWith('#') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                href.startsWith('javascript:')) {
                return;
            }

            // Check if it's an external link
            if (isExternalLink(href)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // Process existing links
    processLinks();

    // Also process any dynamically added links
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        // Check if the added node itself is a link
                        if (node.tagName === 'A' && node.hasAttribute('href')) {
                            const href = node.getAttribute('href');
                            if (isExternalLink(href)) {
                                node.setAttribute('target', '_blank');
                                node.setAttribute('rel', 'noopener noreferrer');
                            }
                        }
                        // Check for links within the added node
                        const links = node.querySelectorAll ? node.querySelectorAll('a[href]') : [];
                        links.forEach(link => {
                            const href = link.getAttribute('href');
                            if (isExternalLink(href)) {
                                link.setAttribute('target', '_blank');
                                link.setAttribute('rel', 'noopener noreferrer');
                            }
                        });
                    }
                });
            }
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});