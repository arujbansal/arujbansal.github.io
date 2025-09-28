---
layout: default
--- 

<div class="home-layout">
    <section class="hero-section">
        <!-- Top Section: Photo and Description Side by Side -->
        <div class="profile-section">
            <div class="profile-image">
                <img src="/assets/images/profile.jpeg" alt="Aruj Bansal" class="profile-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="profile-placeholder">
                    <span>📸</span>
                    <p>Add your photo at<br><code>/assets/images/profile.jpeg</code></p>
                </div>

            </div>

            <div class="profile-info">
                <p class="tagline">{{ site.description }}</p>

                <div class="work-description">
                    <p>
                    I'm broadly interested in algorithms and systems.
                    </p>

                    <!-- <p>
                        In high school, I actively participated in programming competitions and reached the Internaional Olympiad in Informatics Training Camp in India. At Duke, I took an introductory Computer Architecture course and became very interested in systems and studied operating systems, distributed systems, computer networks, performance optimization, compilers, and computer architecture.
                    </p> -->
                </div>

            </div>
        </div>

        <!-- Bottom Section: Two Column Layout -->
        <div class="dual-section">
            <!-- Left Column: Experience Timeline -->
            <div class="experience-column">
                <h2 class="section-title">Work Experience</h2>
                <div class="left-timeline">
                    <!-- Timeline Line -->
                    <div class="timeline-line-left"></div>

                    <!-- Timeline Items -->
                    <div class="timeline-item-left future">
                        <div class="timeline-content-left">
                            <div class="timeline-header">
                                <div class="company-logo">
                                    <img src="/assets/images/optiver-logo.jpg" alt="Optiver" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="logo-placeholder">OPT</div>
                                </div>
                                <div class="timeline-meta">
                                    <div class="timeline-row">
                                        <div class="company-name">Optiver</div>
                                        <div class="location">Austin, TX</div>
                                    </div>
                                    <div class="timeline-row">
                                        <div class="job-title">Incoming Software Engineer Intern</div>
                                        <div class="timeline-period">Summer 2026</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item-left">
                        <div class="timeline-content-left">
                            <div class="timeline-header">
                                <div class="company-logo">
                                    <img src="/assets/images/snowflake-logo.png" alt="Snowflake" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="logo-placeholder">❄️</div>
                                </div>
                                <div class="timeline-meta">
                                    <div class="timeline-row">
                                        <div class="company-name">Snowflake</div>
                                        <div class="location">Menlo Park, CA</div>
                                    </div>
                                    <div class="timeline-row">
                                        <div class="job-title">Software Engineer Intern</div>
                                        <div class="timeline-period">May 2025 - Aug 2025</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item-left">
                        <div class="timeline-content-left">
                            <div class="timeline-header">
                                <div class="company-logo">
                                    <img src="/assets/images/ibm-logo.png" alt="IBM" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="logo-placeholder">IBM</div>
                                </div>
                                <div class="timeline-meta">
                                    <div class="timeline-row">
                                        <div class="company-name">IBM</div>
                                        <div class="location">Gurugram, India</div>
                                    </div>
                                    <div class="timeline-row">
                                        <div class="job-title">Software Developer Intern</div>
                                        <div class="timeline-period">May 2024 - July 2024</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Teaching Experience -->
            <div class="teaching-column">
                <h2 class="section-title">Teaching Experience</h2>
                <div class="teaching-list">
                    <div class="course-item">
                        <div class="course-name">Graduate Distributed Systems</div>
                        <div class="course-code">COMPSCI 512, Fall 2025</div>
                    </div>
                    <div class="course-item">
                        <div class="course-name">Operating Systems</div>
                        <div class="course-code">COMPSCI 310, Spring 2025</div>
                    </div>
                    <div class="course-item">
                        <div class="course-name">Computer Networks</div>
                        <div class="course-code">COMPSCI 356, Spring 2025</div>
                    </div>
                    <div class="course-item">
                        <div class="course-name">Data Structures and Algorithms</div>
                        <div class="course-code">COMPSCI 201, Spring 2024</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
