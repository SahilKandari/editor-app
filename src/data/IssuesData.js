export const IssuesData = [
  {
    id: "1",
    color: 'bg-blue-600',
    number: '446',
    name: 'Total Issues Found',
    issues: [
      {
        title: 'There is the bug in navbar',
        description: 'The bug in the navbar significantly impacts the websites usability, as it leads to erroneous redirections and disrupts the seamless navigation experience for users. Users encountering this issue may find themselves redirected to unintended pages, causing frustration and confusion. Such a malfunction may stem from various sources, including incorrect routing configurations, faulty JavaScript functions, or inconsistencies in the navigation structure. Furthermore, this bug could potentially affect the site credibility and user retention, as a smooth navigation experience is crucial for maintaining engagement and satisfaction. Addressing this issue promptly is imperative to ensure optimal functionality and user satisfaction. Debugging and testing procedures should be employed to identify the root cause of the bug and implement effective solutions to rectify it.',
        remediation: 'To fix the navbar bug, conduct a thorough review of the routing logic and JavaScript functions associated with navigation. Ensure correct URL mappings and validate JavaScript code for any errors. Implement debugging techniques to identify and resolve the issue efficiently.'
      },
      {
        title: 'Broken Contact Form',
        description: 'The contact form on the website fails to submit user inquiries, hindering communication with potential customers. This issue may arise from backend server errors or misconfigured form validation processes.',
        remediation: 'Inspect the backend code handling form submissions to identify and resolve any errors preventing successful form submission. Verify form validation rules to ensure they accurately detect and prevent invalid submissions.'
      },
      {
        title: 'Slow Page Loading Times',
        description: 'Pages on the website load slowly, resulting in a poor user experience and potentially higher bounce rates. This issue may stem from excessive server load, unoptimized code, or large media files.',
        remediation: 'Conduct a performance audit to identify factors contributing to slow page loading times, such as server bottlenecks, unoptimized code, or oversized media files. Implement caching mechanisms, code optimizations, and content delivery network (CDN) integration to improve page loading speed.'
      },
      {
        title: 'Accessibility Compliance Issues',
        description: 'The website lacks proper accessibility features, making it difficult for users with disabilities to navigate and interact with its content. Accessibility compliance is crucial for ensuring equal access to information for all users.',
        remediation: 'Conduct an accessibility audit using automated tools and manual testing techniques to identify accessibility barriers on the website. Implement remediation strategies such as semantic HTML markup, ARIA attributes, and keyboard navigation enhancements to improve accessibility compliance.'
      },
      {
        title: 'Outdated Content on Blog',
        description: 'The blog section of the website contains outdated content, reducing its relevance and value to users. Regularly updating blog posts with fresh content enhances user engagement and maintains the website\'s credibility.',
        remediation: 'Review existing blog posts and identify outdated content that requires updating or removal. Develop a content calendar to schedule regular blog updates and ensure the publication of timely and relevant content.'
      },
      {
        title: 'Unresponsive Design on Mobile Devices',
        description: 'The website does not display properly on mobile devices, leading to a subpar user experience for mobile users. Responsive design is essential for accommodating users accessing the website from various devices and screen sizes.',
        remediation: 'Implement responsive design techniques such as flexible layouts, fluid grids, and media queries to ensure optimal viewing and interaction experiences across different devices and screen resolutions.'
      },
      {
        title: 'Expired SSL Certificate',
        description: 'The SSL certificate used by the website has expired, compromising data security and user trust. Renewing the SSL certificate is essential for encrypting sensitive information and maintaining a secure connection with users.',
        remediation: 'Renew the SSL certificate through the certificate authority (CA) or web hosting provider to restore secure HTTPS connections. Monitor SSL certificate expiration dates regularly and set up automatic renewal processes to prevent future lapses.'
      },
      {
        title: 'Missing Meta Descriptions',
        description: 'Many pages on the website lack meta descriptions, affecting search engine visibility and click-through rates. Meta descriptions provide concise summaries of page content and play a crucial role in search engine optimization (SEO).',
        remediation: 'Review each page on the website and craft unique meta descriptions that accurately summarize the content and entice users to click. Incorporate relevant keywords to improve search engine rankings and attract organic traffic.'
      },
      {
        title: 'Inconsistent Branding Across Platforms',
        description: 'The website branding elements, such as logos, colors, and typography, are inconsistent across different platforms and marketing materials. Brand consistency enhances recognition and fosters trust among users and stakeholders.',
        remediation: 'Develop brand style guidelines specifying proper usage of logos, colors, typography, and other branding elements across all platforms and marketing channels. Ensure adherence to brand guidelines in all design and communication efforts.'
      },
      {
        title: 'Unoptimized Images',
        description: 'Images on the website are not optimized for web performance, leading to slow page loading times and increased bandwidth usage. Optimizing images reduces file size without sacrificing quality, resulting in faster page loads and improved user experience.',
        remediation: 'Resize and compress images using image editing software or online optimization tools to reduce file size while maintaining visual quality. Utilize modern image formats such as WebP and lazy loading techniques to further optimize image loading.'
      },
    ]
  },
  {
    id: "2",
    color: 'bg-red-600',
    number: '108',
    name: 'High Severity Issues',
    issues: [
      {
        title: 'Critical security vulnerability in login system',
        description: 'The login system is vulnerable to SQL injection attacks, potentially allowing unauthorized access to sensitive user data. Immediate action is required to prevent security breaches and protect user privacy.',
        remediation: 'Upgrade the login system to utilize prepared statements and parameterized queries to prevent SQL injection attacks. Conduct thorough security testing to ensure the system is robust against potential vulnerabilities.'
      },
      {
        title: 'Exposed API Endpoints',
        description: 'API endpoints used by the website are exposed to the public without proper authentication or access controls, increasing the risk of unauthorized access and data breaches. Securing API endpoints is crucial for protecting sensitive information and maintaining data integrity.',
        remediation: 'Implement authentication mechanisms such as API keys, OAuth tokens, or JWT tokens to restrict access to authorized users and applications. Apply appropriate access controls and rate limiting measures to mitigate the risk of API abuse.'
      },
      {
        title: 'Cross-Site Scripting (XSS) Vulnerability',
        description: 'The website is susceptible to cross-site scripting (XSS) attacks, allowing malicious actors to inject arbitrary code into web pages viewed by other users. XSS vulnerabilities pose a significant security risk and must be addressed promptly to prevent exploitation.',
        remediation: 'Implement input validation and output encoding techniques to sanitize user input and prevent the execution of malicious scripts. Utilize security libraries and frameworks to mitigate XSS vulnerabilities and ensure secure coding practices.'
      },
      {
        title: 'Critical security vulnerability in login system',
        description: 'The login system is vulnerable to SQL injection attacks, potentially allowing unauthorized access to sensitive user data. Immediate action is required to prevent security breaches and protect user privacy.',
        remediation: 'Upgrade the login system to utilize prepared statements and parameterized queries to prevent SQL injection attacks. Conduct thorough security testing to ensure the system is robust against potential vulnerabilities.'
      },
      {
        title: 'Exposed API Endpoints',
        description: 'API endpoints used by the website are exposed to the public without proper authentication or access controls, increasing the risk of unauthorized access and data breaches. Securing API endpoints is crucial for protecting sensitive information and maintaining data integrity.',
        remediation: 'Implement authentication mechanisms such as API keys, OAuth tokens, or JWT tokens to restrict access to authorized users and applications. Apply appropriate access controls and rate limiting measures to mitigate the risk of API abuse.'
      },
      {
        title: 'Cross-Site Scripting (XSS) Vulnerability',
        description: 'The website is susceptible to cross-site scripting (XSS) attacks, allowing malicious actors to inject arbitrary code into web pages viewed by other users. XSS vulnerabilities pose a significant security risk and must be addressed promptly to prevent exploitation.',
        remediation: 'Implement input validation and output encoding techniques to sanitize user input and prevent the execution of malicious scripts. Utilize security libraries and frameworks to mitigate XSS vulnerabilities and ensure secure coding practices.'
      },
      {
        title: 'Critical security vulnerability in login system',
        description: 'The login system is vulnerable to SQL injection attacks, potentially allowing unauthorized access to sensitive user data. Immediate action is required to prevent security breaches and protect user privacy.',
        remediation: 'Upgrade the login system to utilize prepared statements and parameterized queries to prevent SQL injection attacks. Conduct thorough security testing to ensure the system is robust against potential vulnerabilities.'
      },
      {
        title: 'Exposed API Endpoints',
        description: 'API endpoints used by the website are exposed to the public without proper authentication or access controls, increasing the risk of unauthorized access and data breaches. Securing API endpoints is crucial for protecting sensitive information and maintaining data integrity.',
        remediation: 'Implement authentication mechanisms such as API keys, OAuth tokens, or JWT tokens to restrict access to authorized users and applications. Apply appropriate access controls and rate limiting measures to mitigate the risk of API abuse.'
      },
      {
        title: 'Cross-Site Scripting (XSS) Vulnerability',
        description: 'The website is susceptible to cross-site scripting (XSS) attacks, allowing malicious actors to inject arbitrary code into web pages viewed by other users. XSS vulnerabilities pose a significant security risk and must be addressed promptly to prevent exploitation.',
        remediation: 'Implement input validation and output encoding techniques to sanitize user input and prevent the execution of malicious scripts. Utilize security libraries and frameworks to mitigate XSS vulnerabilities and ensure secure coding practices.'
      },
    ]
  },
  {
    id: "3",
    color: 'bg-yellow-600',
    number: '143',
    name: 'Medium Severity Issues',
    issues: [
      {
        title: 'Broken image links on homepage',
        description: 'Several images on the homepage are not loading properly, resulting in broken links and missing content. This affects the visual appeal and user experience of the website, necessitating immediate resolution to maintain site integrity.',
        remediation: 'Review image URLs and ensure they point to the correct location. Replace broken links with valid image sources or placeholders to maintain visual consistency on the homepage.'
      },
      {
        title: 'Mixed Content Warnings',
        description: 'The website contains both secure (HTTPS) and insecure (HTTP) content, triggering mixed content warnings in web browsers. Mixed content compromises data security and may lead to browser warnings or blocked content, impacting user trust and website credibility.',
        remediation: 'Update all references to insecure content (HTTP) to secure equivalents (HTTPS) to ensure a fully secure browsing experience. Use protocol-relative URLs or secure third-party resources to prevent mixed content warnings.'
      },
      {
        title: 'Cookie Security Vulnerabilities',
        description: 'Cookies used by the website lack proper security measures, making them susceptible to interception or tampering by attackers. Insecure cookies pose a risk to user privacy and session integrity, requiring immediate remediation.',
        remediation: 'Implement secure cookie attributes such as HttpOnly, Secure, and SameSite to enhance cookie security and prevent common attack vectors such as session hijacking and cross-site scripting (XSS). Regularly review cookie settings and configurations to ensure compliance with security best practices.'
      },
      {
        title: 'Broken image links on homepage',
        description: 'Several images on the homepage are not loading properly, resulting in broken links and missing content. This affects the visual appeal and user experience of the website, necessitating immediate resolution to maintain site integrity.',
        remediation: 'Review image URLs and ensure they point to the correct location. Replace broken links with valid image sources or placeholders to maintain visual consistency on the homepage.'
      },
      {
        title: 'Mixed Content Warnings',
        description: 'The website contains both secure (HTTPS) and insecure (HTTP) content, triggering mixed content warnings in web browsers. Mixed content compromises data security and may lead to browser warnings or blocked content, impacting user trust and website credibility.',
        remediation: 'Update all references to insecure content (HTTP) to secure equivalents (HTTPS) to ensure a fully secure browsing experience. Use protocol-relative URLs or secure third-party resources to prevent mixed content warnings.'
      },
      {
        title: 'Cookie Security Vulnerabilities',
        description: 'Cookies used by the website lack proper security measures, making them susceptible to interception or tampering by attackers. Insecure cookies pose a risk to user privacy and session integrity, requiring immediate remediation.',
        remediation: 'Implement secure cookie attributes such as HttpOnly, Secure, and SameSite to enhance cookie security and prevent common attack vectors such as session hijacking and cross-site scripting (XSS). Regularly review cookie settings and configurations to ensure compliance with security best practices.'
      },
      {
        title: 'Broken image links on homepage',
        description: 'Several images on the homepage are not loading properly, resulting in broken links and missing content. This affects the visual appeal and user experience of the website, necessitating immediate resolution to maintain site integrity.',
        remediation: 'Review image URLs and ensure they point to the correct location. Replace broken links with valid image sources or placeholders to maintain visual consistency on the homepage.'
      },
      {
        title: 'Mixed Content Warnings',
        description: 'The website contains both secure (HTTPS) and insecure (HTTP) content, triggering mixed content warnings in web browsers. Mixed content compromises data security and may lead to browser warnings or blocked content, impacting user trust and website credibility.',
        remediation: 'Update all references to insecure content (HTTP) to secure equivalents (HTTPS) to ensure a fully secure browsing experience. Use protocol-relative URLs or secure third-party resources to prevent mixed content warnings.'
      },
      {
        title: 'Cookie Security Vulnerabilities',
        description: 'Cookies used by the website lack proper security measures, making them susceptible to interception or tampering by attackers. Insecure cookies pose a risk to user privacy and session integrity, requiring immediate remediation.',
        remediation: 'Implement secure cookie attributes such as HttpOnly, Secure, and SameSite to enhance cookie security and prevent common attack vectors such as session hijacking and cross-site scripting (XSS). Regularly review cookie settings and configurations to ensure compliance with security best practices.'
      },
    ]
  },
  {
    id: "4",
    color: 'bg-green-600',
    number: '00',
    name: 'Low Severity Issues',
    issues: [
      {
        title: 'Spelling errors in product descriptions',
        description: 'Several product descriptions contain spelling errors and typographical mistakes, detracting from the professionalism and credibility of the website. Addressing these errors is important for maintaining a polished and trustworthy online presence.',
        remediation: 'Proofread product descriptions and correct any spelling or typographical errors. Implement a review process to ensure new content is thoroughly checked for accuracy before publication.'
      },
      {
        title: 'Unused JavaScript Libraries',
        description: 'The website includes unnecessary JavaScript libraries that are not utilized in its functionality, increasing page load times and consuming additional bandwidth. Removing unused JavaScript libraries improves website performance and reduces overhead.',
        remediation: 'Conduct a thorough review of JavaScript dependencies and remove any libraries that are not essential to the website\'s functionality. Consider replacing bulky libraries with lightweight alternatives or custom solutions where applicable.'
      },
      {
        title: 'Inconsistent Heading Structure',
        description: 'The website\'s heading structure is inconsistent across pages, leading to confusion and difficulties in navigating content. A consistent heading structure improves accessibility and enhances user experience.',
        remediation: 'Standardize heading levels and hierarchy across pages to establish a coherent structure that reflects the logical organization of content. Use HTML heading elements (h1-h6) appropriately to convey the importance and relationships between different sections.'
      },
      {
        title: 'Spelling errors in product descriptions',
        description: 'Several product descriptions contain spelling errors and typographical mistakes, detracting from the professionalism and credibility of the website. Addressing these errors is important for maintaining a polished and trustworthy online presence.',
        remediation: 'Proofread product descriptions and correct any spelling or typographical errors. Implement a review process to ensure new content is thoroughly checked for accuracy before publication.'
      },
      {
        title: 'Unused JavaScript Libraries',
        description: 'The website includes unnecessary JavaScript libraries that are not utilized in its functionality, increasing page load times and consuming additional bandwidth. Removing unused JavaScript libraries improves website performance and reduces overhead.',
        remediation: 'Conduct a thorough review of JavaScript dependencies and remove any libraries that are not essential to the website\'s functionality. Consider replacing bulky libraries with lightweight alternatives or custom solutions where applicable.'
      },
      {
        title: 'Inconsistent Heading Structure',
        description: 'The website\'s heading structure is inconsistent across pages, leading to confusion and difficulties in navigating content. A consistent heading structure improves accessibility and enhances user experience.',
        remediation: 'Standardize heading levels and hierarchy across pages to establish a coherent structure that reflects the logical organization of content. Use HTML heading elements (h1-h6) appropriately to convey the importance and relationships between different sections.'
      },
      {
        title: 'Spelling errors in product descriptions',
        description: 'Several product descriptions contain spelling errors and typographical mistakes, detracting from the professionalism and credibility of the website. Addressing these errors is important for maintaining a polished and trustworthy online presence.',
        remediation: 'Proofread product descriptions and correct any spelling or typographical errors. Implement a review process to ensure new content is thoroughly checked for accuracy before publication.'
      },
      {
        title: 'Unused JavaScript Libraries',
        description: 'The website includes unnecessary JavaScript libraries that are not utilized in its functionality, increasing page load times and consuming additional bandwidth. Removing unused JavaScript libraries improves website performance and reduces overhead.',
        remediation: 'Conduct a thorough review of JavaScript dependencies and remove any libraries that are not essential to the website\'s functionality. Consider replacing bulky libraries with lightweight alternatives or custom solutions where applicable.'
      },
      {
        title: 'Inconsistent Heading Structure',
        description: 'The website\'s heading structure is inconsistent across pages, leading to confusion and difficulties in navigating content. A consistent heading structure improves accessibility and enhances user experience.',
        remediation: 'Standardize heading levels and hierarchy across pages to establish a coherent structure that reflects the logical organization of content. Use HTML heading elements (h1-h6) appropriately to convey the importance and relationships between different sections.'
      },
    ]
  },
  {
    id: "5",
    color: 'bg-purple-600',
    number: '68',
    name: 'Informational Issues',
    issues: [
      {
        title: 'Update copyright year in footer',
        description: 'The copyright year displayed in the website footer is outdated and does not reflect the current year. Updating the copyright year ensures accuracy and compliance with legal requirements.',
        remediation: 'Manually update the copyright year in the website footer to reflect the current year. Alternatively, automate the process using server-side scripting or content management systems.'
      },
      {
        title: 'Implement Structured Data Markup',
        description: 'The website lacks structured data markup, hindering search engines\' ability to understand and index its content accurately. Implementing structured data markup enhances search visibility and enables rich snippets in search results.',
        remediation: 'Incorporate schema.org markup into relevant pages to provide search engines with structured data about the website\'s content, such as product details, reviews, and organization information. Test the implementation using Google\'s Structured Data Testing Tool to ensure proper indexing and display.'
      },
      {
        title: 'Missing Alt Attributes for Images',
        description: 'Many images on the website do not have descriptive alt attributes, impacting accessibility and SEO. Alt attributes provide textual alternatives for visually impaired users and improve image search engine optimization.',
        remediation: 'Add descriptive alt attributes to all images on the website, providing concise and accurate descriptions of their content or purpose. Use relevant keywords where applicable to enhance SEO and accessibility.'
      },
      {
        title: 'Update copyright year in footer',
        description: 'The copyright year displayed in the website footer is outdated and does not reflect the current year. Updating the copyright year ensures accuracy and compliance with legal requirements.',
        remediation: 'Manually update the copyright year in the website footer to reflect the current year. Alternatively, automate the process using server-side scripting or content management systems.'
      },
      {
        title: 'Implement Structured Data Markup',
        description: 'The website lacks structured data markup, hindering search engines\' ability to understand and index its content accurately. Implementing structured data markup enhances search visibility and enables rich snippets in search results.',
        remediation: 'Incorporate schema.org markup into relevant pages to provide search engines with structured data about the website\'s content, such as product details, reviews, and organization information. Test the implementation using Google\'s Structured Data Testing Tool to ensure proper indexing and display.'
      },
      {
        title: 'Missing Alt Attributes for Images',
        description: 'Many images on the website do not have descriptive alt attributes, impacting accessibility and SEO. Alt attributes provide textual alternatives for visually impaired users and improve image search engine optimization.',
        remediation: 'Add descriptive alt attributes to all images on the website, providing concise and accurate descriptions of their content or purpose. Use relevant keywords where applicable to enhance SEO and accessibility.'
      },
      {
        title: 'Update copyright year in footer',
        description: 'The copyright year displayed in the website footer is outdated and does not reflect the current year. Updating the copyright year ensures accuracy and compliance with legal requirements.',
        remediation: 'Manually update the copyright year in the website footer to reflect the current year. Alternatively, automate the process using server-side scripting or content management systems.'
      },
      {
        title: 'Implement Structured Data Markup',
        description: 'The website lacks structured data markup, hindering search engines\' ability to understand and index its content accurately. Implementing structured data markup enhances search visibility and enables rich snippets in search results.',
        remediation: 'Incorporate schema.org markup into relevant pages to provide search engines with structured data about the website\'s content, such as product details, reviews, and organization information. Test the implementation using Google\'s Structured Data Testing Tool to ensure proper indexing and display.'
      },
      {
        title: 'Missing Alt Attributes for Images',
        description: 'Many images on the website do not have descriptive alt attributes, impacting accessibility and SEO. Alt attributes provide textual alternatives for visually impaired users and improve image search engine optimization.',
        remediation: 'Add descriptive alt attributes to all images on the website, providing concise and accurate descriptions of their content or purpose. Use relevant keywords where applicable to enhance SEO and accessibility.'
      },
    ]
  },
  {
    id: "5",
    color: 'bg-sky-600',
    number: '127',
    name: 'Optimisation Issues',
    issues: [
      {
        title: 'Minify JavaScript and CSS files',
        description: 'JavaScript and CSS files are not minified, resulting in larger file sizes and slower page loading times. Minification reduces file size by removing unnecessary whitespace and comments, improving website performance.',
        remediation: 'Use automated tools or build processes to minify JavaScript and CSS files before deploying them to production. Consider enabling gzip compression to further reduce file size and enhance loading speed.'
      },
      {
        title: 'Enable Browser Caching',
        description: 'Browser caching is not utilized, leading to repetitive downloads of static resources and slower page loading times. Enabling browser caching allows browsers to store cached copies of resources, reducing server requests and improving performance.',
        remediation: 'Configure server-side caching headers to instruct browsers to cache static resources such as CSS, JavaScript, and image files. Set appropriate expiration times for cached resources to balance freshness and efficiency.'
      },
      {
        title: 'Reduce HTTP Requests',
        description: 'The website makes excessive HTTP requests to load external resources, increasing page load times and negatively impacting performance. Reducing the number of HTTP requests improves website speed and user experience.',
        remediation: 'Combine and minify CSS and JavaScript files to reduce the number of external requests. Utilize CSS sprites for image assets and lazy loading techniques for non-essential resources to optimize page loading performance.'
      },
      {
        title: 'Minify JavaScript and CSS files',
        description: 'JavaScript and CSS files are not minified, resulting in larger file sizes and slower page loading times. Minification reduces file size by removing unnecessary whitespace and comments, improving website performance.',
        remediation: 'Use automated tools or build processes to minify JavaScript and CSS files before deploying them to production. Consider enabling gzip compression to further reduce file size and enhance loading speed.'
      },
      {
        title: 'Enable Browser Caching',
        description: 'Browser caching is not utilized, leading to repetitive downloads of static resources and slower page loading times. Enabling browser caching allows browsers to store cached copies of resources, reducing server requests and improving performance.',
        remediation: 'Configure server-side caching headers to instruct browsers to cache static resources such as CSS, JavaScript, and image files. Set appropriate expiration times for cached resources to balance freshness and efficiency.'
      },
      {
        title: 'Reduce HTTP Requests',
        description: 'The website makes excessive HTTP requests to load external resources, increasing page load times and negatively impacting performance. Reducing the number of HTTP requests improves website speed and user experience.',
        remediation: 'Combine and minify CSS and JavaScript files to reduce the number of external requests. Utilize CSS sprites for image assets and lazy loading techniques for non-essential resources to optimize page loading performance.'
      },
      {
        title: 'Minify JavaScript and CSS files',
        description: 'JavaScript and CSS files are not minified, resulting in larger file sizes and slower page loading times. Minification reduces file size by removing unnecessary whitespace and comments, improving website performance.',
        remediation: 'Use automated tools or build processes to minify JavaScript and CSS files before deploying them to production. Consider enabling gzip compression to further reduce file size and enhance loading speed.'
      },
      {
        title: 'Enable Browser Caching',
        description: 'Browser caching is not utilized, leading to repetitive downloads of static resources and slower page loading times. Enabling browser caching allows browsers to store cached copies of resources, reducing server requests and improving performance.',
        remediation: 'Configure server-side caching headers to instruct browsers to cache static resources such as CSS, JavaScript, and image files. Set appropriate expiration times for cached resources to balance freshness and efficiency.'
      },
      {
        title: 'Reduce HTTP Requests',
        description: 'The website makes excessive HTTP requests to load external resources, increasing page load times and negatively impacting performance. Reducing the number of HTTP requests improves website speed and user experience.',
        remediation: 'Combine and minify CSS and JavaScript files to reduce the number of external requests. Utilize CSS sprites for image assets and lazy loading techniques for non-essential resources to optimize page loading performance.'
      },
    ]
  },
];

