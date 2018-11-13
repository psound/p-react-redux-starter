import React from 'react';
import logo from '../../img/theCommons.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';


class Header extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
    }
  }

  componentDidMount() {
      //console.log('Header', this);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }
    navTime = (x) => {
        //console.log('here', x);
        this.setState({
            active: x,
        });
    }
  render() {
      return(
        <header
            id="j-compact-header"
            className="j-header-mode-custom">
            {/* Customer generated HTML */}
            <div id="j-cust-head" className="j-cust-head clearfix">
                <div className="row no-gutters" id="head">
                    <a href="/" className="col-4">
                    <img
                        alt="logo"
                        id="logo"
                        className="pull-left"
                        src={logo} />
                    </a>
                    <div className="col-8 pull-right">
                      <div id="navbarSupportedContent">
                        <ul className="nav">
                        <li className="nav-item has-menu">
                            <a href="#" className="nav-link">Communications</a>
                            <div className="menu">
                                <div className="col seconds">
                                    <div className="menu-section">
                                        <div className="menu-section-content">
                                            <ul>
                                              <li>
                                              <a
                                                  className="section-header nav-link"
                                                  href="/community/corporate-updates">
                                              Corporate Updates
                                              </a>
                                              </li>
                                              <li>
                                              <a href="https://social.athenahealth.com/community/corporate-updates/corporate-must-reads" className="nav-link">
                                              Must Reads
                                              </a>
                                              </li>
                                              <li>
                                                <a href="/community/critical-news" className="nav-link">
                                                Critical News
                                                </a>
                                              </li>
                        <li>
                        <a href="/community/5-focus-areas" className="nav-link">
                        Our 5 Focus Areas
                        </a>
                        </li>
                        <li>
                        <a href="/community/brand" className="nav-link">
                        Our Brand
                        </a>
                        </li>
                        <li>
                        <a href="/community/company-meetings-2018" className="nav-link">
                        Company Meetings
                        </a>
                        </li>
                        <li>
                        <a href="/community/corporate-updates/athenatalk" className="nav-link">athenaTalks</a>
                        </li>
                        <li style={{listStyle: 'none'}}>
                        <ul />
                        </li>
                        </ul>
                        </div>
                        </div>
                        <div className="menu-section">
                        <div className="menu-section-content">
                        <ul>
                        <li>
                        <a
                            className="section-header"
                            href="/community/corporate-updates/leadership-blog">
                        Leadership Blog
                        </a>
                        </li>
                        </ul>
                        </div>
                        </div>
                        <div className="menu-section">
                        <div className="menu-section-content">
                        <ul>
                        <li>
                        <a
                            className="section-header"
                            href="/groups/newsletter-hub">
                        Newsletter Hub
                        </a>
                        </li>
                        <li>
                        <a href="/community/corporate-updates/athena-in-the-news" className="nav-link">
                        athena in the News (PR)
                        </a>
                        </li>
                        <li>
                        <a href="/community/corporate-updates/government-affairs" className="nav-link">
                        Inside the Beltway
                        </a>
                        </li>
                        </ul>
                        </div>
                        </div>
                        </div>
                        <div className="col seconds">
                        <div className="menu-section">
                        <div className="menu-section-content">
                        <ul>
                        <li>
                        <a className="section-header nav-link" href="/activity">
                        Activity Streams
                        </a>
                        </li>
                        <li>
                        <a href="/activity?streamSource=connections&streamID=14" className="nav-link">
                        My Connections Activity
                        </a>
                        </li>
                        <li>
                        <a href="/activity?streamSource=custom&streamID=33819">
                        Corporate Updates
                        </a>
                        </li>
                        <li>
                        <a href="/activity?streamSource=custom&streamID=41707">
                        My Office Activity
                        </a>
                        </li>
                        </ul>
                        </div>
                        </div>
                        </div>
                        </div>
                        </li>
                        <li className="has-menu nav-item">
                            <a href="#" className="nav-link">Divisions</a>
                            <div className="menu">
                                <div className="col seconds">
                                    <div className="menu-section">
                                        <div className="menu-section-image">
                                            <a href="/community/athenacentral">
                                            <img
                                                alt="athenaCentral"
                                                src="athenahero.png"
                                                title="athenaCentral" />
                                            </a>
                                        </div>
                                        <div className="menu-section-content with-icons">
                                            <ul>
                                                <li>
                                                    <b>
                                                    <a href="/community/athenapeople">athenaPeople</a>
                                                    </b>
                                                </li>
                                                <li>
                                                    <a href="/community/athenagives">athenaGives</a>
                                                </li>
                                                <li>
                                                    <a href="/community/athenacentral/human-resources">
                                                    Human Resources
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/internal-communications">
                                                    Internal Communications
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/athenacentral/legal/overview">Legal</a>
                                                </li>
                                                <li>
                                                    Talent Acquisition
                                                </li>
                                                <li>
                                                    <a href="/community/athenacentral/enterprise-technology">
                                                    Technology Services
                                                    </a>
                                                </li>
                                            </ul>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <div className="menu-section">
                                        <div className="menu-section-image">
                                            <a href>
                                            <img
                                                alt="Finance"
                                                src="rulesengine.png"
                                                title="Finance" />
                                            </a>
                                        </div>
                                        <div className="menu-section-content with-icons">
                                            <ul>
                                                <li>
                                                    <a
                                                        className="section-header"
                                                        href="/community/finance-division">Finance</a>
                                                </li>
                                                <li>
                                                    <a href="/community/athenaenvironment">athenaEnvironment</a>
                                                </li>
                                                <li>Controllership</li>
                                                <li>
                                                    <a href="/community/finance/corporate-development">
                                                    Corporate Development
                                                    </a>
                                                </li>
                                                <li>
                                                    Financial Planning &amp; Analysis
                                                </li>
                                                <li>
                                                    <a href="/community/audithub/overview">
                                                    Internal Audit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/finance-division/investor-relations">
                                                    Investor Relations
                                                    </a>
                                                </li>
                                                <li>Procurement</li>
                                            </ul>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <div className="menu-section">
                                        <div className="menu-section-image">
                                            <a href>
                                            <img
                                                alt="CTO"
                                                src="rulesengine.png"
                                                title="CTO" />
                                            </a>
                                        </div>
                                        <div className="menu-section-content with-icons">
                                            <ul>
                                                <li />
                                                <li>
                                                    <a
                                                        className="section-header"
                                                        href="/community/cto">CTO</a>
                                                </li>
                                                <li>
                                                    <a href="https://social.athenahealth.com/community/cto/agile%40athena">agile@athena</a>
                                                </li>
                                                <li>
                                                    <a href="https://social.athenahealth.com/community/cto/athena.intelligence/overview">athena.intelligence</a>
                                                </li>
                                                <li>
                                                    Business Applications
                                                </li>
                                                <li>
                                                    <a href="/community/cto/IaaS">
                                                    Infrastructure as a Service
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/cto/product-engineering">
                                                    Product Engineering
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/cto/releases/overview">
                                                    Release Management
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/cto/release-notes-o-help">
                                                    Release Notes &amp; O-Help
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/protect">Security</a>
                                                </li>
                                                <li>
                                                    <a href="/community/cto/tech-admin-team">
                                                    Tech Admin Team
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/community/cto/tpm">
                                                    Technical Program Management
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://athenaconfluence.athenahealth.com/pages/viewpage.action?pageId=169599406">VAT</a>
                                                </li>
                                            </ul>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <div className="menu-section">
                                        <div className="menu-section-image">
                                            <a href>
                                            <img
                                                alt="Network Services"
                                                src="rulesengine.png"
                                                title="Network Services" />
                                            </a>
                                        </div>
                                        <div className="menu-section-content with-icons">
                                            <ul>
                                                <li>
                                                    <a
                                                        className="section-header"
                                                        href="/community/network-services">
                                                    Network Services
                                                    </a>
                                                </li>
                                                <li>
                                                    Provider Network Services
                                                </li>
                                                <li>PaaS</li>
                                                <li>
                                                    <a href="/community/more-disruption-please">MDP</a>
                                                </li>
                                                <li>MedInfo</li>
                                                <li>
                                                    <a href="/community/network-services/emerging-services">
                                                    Network Services Sales
                                                    </a>
                                                </li>
                                                <li>
                                                    Emerging Services
                                                </li>
                                                <li>
                                                    Network Services Operations
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col seconds">
                                    <div className="menu-section">
                                        <div className="menu-section-content">
                                            <ul />
                                        </div>
                                        <div className="menu-section-content with-icons">
                                            <ul />
                                        </div>
                                        <div className="menu-section-content with-icons">
                                        <ul>
                                        <li>
                                        <a
                                            className="section-header"
                                            href="/community/core-services">
                                        Core Services
                                        </a>
                                        </li>
                                        {/*<li><a href="https://social.athenahealth.com/community/clinicals">Clinicals</a></li> */}
                                        <li>
                                        <a href="/community/core-services/collector">Collector</a>
                                        </li>
                                        <li>
                                        <a href="/community/core-services/core-services-operations">
                                        Core Services Delivery
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/community/coo/user-experience">
                                        Experience Design
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/community/coo/healthcare-transactions">
                                        Integration Services
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/community/patient-population-health">
                                        Patient/Population Health Services
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/community/product-management">
                                        Product Management
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/community/product-marketing">
                                        Product Marketing
                                        </a>
                                        , Adoption &amp;
                                        <a href="/community/core-services/product-operations">Operations</a>
                                        </li>
                                        </ul>
                                        <br />
                                        <br />
                                        </div>
                                    </div>
                                    <div className="menu-section">
                                    <div className="menu-section-image">
                                    <a href>
                                    <img
                                        alt="Marketing & Pipeline Operations"
                                        src="rulesengine.png"
                                        title="Marketing & Pipeline Operations" />
                                    </a>
                                    </div>
                                    <div className="menu-section-content with-icons">
                                    <ul>
                                    <li>
                                    <a
                                        className="section-header"
                                        href="/community/marketing-pipeline-operations">
                                    Marketing &amp; Pipeline Operations
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/community/corporate-updates/athena-in-the-news">
                                    athena in the News
                                    </a>
                                    </li>
                                    <li>
                                    Customer Success Optimization
                                    </li>
                                    <li>
                                    Customer Success Platform &amp; Tools
                                    </li>
                                    <li>
                                    Enablement &amp; Shared Services
                                    </li>
                                    <li>
                                    <a href="/community/marketing-pipeline-operations/marketing-and-communications">
                                    Marketing &amp; Communications
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/community/aa-operations">
                                    Sales &amp; Marketing Optimization
                                    </a>
                                    </li>
                                    <li>
                                    Sales and Marketing Platform &amp; Tools
                                    </li>
                                    </ul>
                                    <br />
                                    <br />
                                    </div>
                                    </div>
                                    <div className="menu-section">
                                    <div className="menu-section-image">
                                    <a href>
                                    <img
                                        alt="Customer Success"
                                        src="rulesengine.png"
                                        title="Customer Success" />
                                    </a>
                                    </div>
                                    <div className="menu-section-content with-icons">
                                    <ul>
                                    <li>
                                    <a
                                        className="section-header"
                                        href="/community/customer-success-division">
                                    Customer Success
                                    </a>
                                    </li>
                                    <li>
                                    Client Management
                                    </li>
                                    <li>
                                    Client Analytics &amp; Interventions
                                    </li>
                                    <li>
                                    <a href="/community/client-org/athenaCare/coachingandtrainingservices">
                                    Coaching and Training Services
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/community/client-org/athenaCare">
                                    Customer Care
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/community/customer-success-division/emerging-services">
                                    Emerging Services
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/community/professional-services">
                                    Professional Services
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/community/customer-success-division/voice-of-the-customer-voc">
                                    Voice of the Customer
                                    </a>
                                    </li>
                                    </ul>
                                    <br />
                                    <br />
                                    </div>
                                    </div>
                                    <div className="menu-section">
                                    <div className="menu-section-image">
                                    <a href>
                                    <img
                                        alt="Sales"
                                        src="rulesengine.png"
                                        title="Sales" />
                                    </a>
                                    </div>
                                    <div className="menu-section-content with-icons">
                                    <ul>
                                    <li>
                                    <a
                                        className="section-header"
                                        href="/community/sales">Sales</a>
                                    </li>
                                    <li>
                                    Small Group
                                    </li>
                                    <li>Group</li>
                                    <li>Enterprise</li>
                                    <li>Hospital</li>
                                    <li>
                                    <a href="/community/strategic-accounts">
                                    Strategic Accounts
                                    </a>
                                    </li>
                                    <li>
                                    Provider Networks
                                    </li>
                                    </ul>
                                    <br />
                                    <br />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </li>
                            <li className="has-menu nav-item">
                            <a href="#" className="nav-link">Offices</a>
                            <div className="menu">
                            <div className="col seconds">
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/atlanta">
                            <img
                                alt="Atlanta"
                                src="atlantanav.jpg"
                                title="Atlanta" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/atlanta">Atlanta</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/north-america-must-reads/atlanta-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="/community/locations/atlanta">Announcements</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/austin">
                            <img
                                alt="Austin"
                                src="austinnav.jpg"
                                title="Austin" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/austin">Austin</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/north-america-must-reads/austin-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="https://social.athenahealth.com/community/locations/austin">Announcements</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/bangalore">
                            <img
                                alt="Bengaluru"
                                src="indianav.jpg"
                                title="Bengaluru" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/bangalore">Bengaluru</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/india-must-reads/bangalore-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="/community/locations/bangalore">Announcements</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/belfast">
                            <img
                                alt="Belfast"
                                src="belfastnav.jpg"
                                title="Belfast" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/belfast">Belfast</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/north-america-must-reads/belfast-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="https://social.athenahealth.com/community/locations/belfast">Announcements</a>
                            </li>
                            <li>
                            <a href="https://social.athenahealth.com/community/locations/belfast/tags#/?tags=nourish%20belfast">
                            Nourish Menu
                            </a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/Chennai">
                            <img
                                alt="Chennai"
                                src="indianav.jpg"
                                title="Chennai" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/chennai">Chennai</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/india-must-reads/chennai-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="/community/locations/chennai">Announcements</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            <div className="col seconds">
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/Pune">
                            <img alt="Pune" src="indianav.jpg" title="Pune" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/pune">Pune</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/india-must-reads/pune-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="/community/locations/pune">Announcements</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/watertown">
                            <img
                                alt="Watertown"
                                src="watertownnav.jpg"
                                title="Watertown" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/watertown">Watertown</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/north-america-must-reads/watertown-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="/community/locations/watertown">Announcements</a>
                            </li>
                            <li>
                            <a href="/groups/athenacommutes">athenaCommutes</a>
                            </li>
                            <li>
                            <a href="https://social.athenahealth.com/community/locations/watertown/tags#/?tags=nourish%20watertown">
                            Nourish Menu
                            </a>
                            </li>
                            <li>
                            <a href="https://social.athenahealth.com/community/locations/watertown/watertown-campus-happenings?invite=false">
                            Watertown Campus Happenings
                            </a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-image">
                            <a href="/community/locations/remote">
                            <img
                                alt="Remote"
                                src="remotenav.jpg"
                                title="Remote" />
                            </a>
                            </div>
                            <div className="menu-section-content with-icons">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/locations/remote">Remote</a>
                            </li>
                            <li>
                            <a href="/community/corporate-updates/corporate-must-reads/north-america-must-reads/remote-must-reads">
                            Must Reads
                            </a>
                            </li>
                            <li>
                            <a href="/community/locations/remote">Announcements</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            </div>
                            </li>
                            <li className="has-menu nav-item">
                            <a href="#" className="nav-link">Communities</a>
                            <div className="menu">
                            <div className="col seconds">
                            <div className="menu-section">
                            <div className="menu-section-content">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/bulletin-board">
                            Bulletin Board
                            </a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-content">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/athena-culture">
                            Resource Groups
                            </a>
                            </li>
                            <li>
                            <a href="/groups/athenadiversity-council">
                            athenaDiversity Council
                            </a>
                            </li>
                            <li>
                            <a href="/groups/athenamoms">athenaParents</a>
                            </li>
                            <li>
                            <a href="/groups/gaythenistas">athenaProud</a>
                            </li>
                            <li>
                            <a href="/groups/womens-leadership-forum">
                            Women’s Leadership Forum
                            </a>
                            </li>
                            <li>
                            <a href="/community/athena-culture">More...</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-content">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/athena-culture">
                            Common Interests
                            </a>
                            </li>
                            <li>
                            <a href="/groups/artsynistas">ARTSYnistas</a>
                            </li>
                            <li>
                            <a href="/groups/lunchroulette">LunchRoulette</a>
                            </li>
                            <li>
                            <a href="/groups/community-management">
                            Community Management
                            </a>
                            </li>
                            <li>
                            <a href="/community/athena-culture">More...</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            <div className="menu-section">
                            <div className="menu-section-content">
                            <ul>
                            <li>
                            <a
                                className="section-header"
                                href="/community/athena-culture">Extracurriculars</a>
                            </li>
                            <li>
                            <a href="/groups/athenaski">athenaSki</a>
                            </li>
                            <li>
                            <a href="/groups/trek-across-maine">
                            Trek Across Maine
                            </a>
                            </li>
                            <li>
                            <a href="/community/athena-culture">More...</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            <div className="col seconds">
                            <div className="menu-section">
                            <div className="menu-section-content">
                            <p>
                            <strong>
                            What’s a community group?
                            </strong>
                            <br />
                            <br />
                            Community groups are collaboration spaces for athenistas who are linked by a common interest. Community groups can be created for existing organized groups or a new group you want to form. You can have discussions, post videos and images from events, coordinate event details and information and more! To request a community group e-mail
                            <a href="mailto:support@athenahealth.com">support@athenahealth.com</a>.
                            </p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </li>
                            <li className="has-menu nav-item">
                            <a href="#" className="nav-link">
                            Top Destinations
                            </a>
                            <div className="menu">
                            <div className="col seconds">
                            <div className="menu-section">
                            <div className="menu-section-content">
                            <ul>
                            <li>
                            <a
                                href="https://sso.athenahealth.com/idp/startSSO.ping?PartnerSpId=https://fed.adp.com"
                                >
                            ADP (Payroll Self Service)
                            </a>
                            </li>
                            <li>
                            <a href="https://athenahealth.service-now.com/sp">askHub</a>
                            </li>
                            <li>
                            <a
                                href="https://athenanet.athenahealth.com/login.esp"
                                >athenaNet</a>
                            </li>
                            <li>
                            <a
                                href="http://athenauportal.athenahealth.com/"
                                >
                            athenaUniversity Learning Portal
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://portals.athenahealth.com/employee"
                                >
                            Employee Portal (Pay &amp; Benefits, PTO)
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://portals.athenahealth.com/employee/career-portal"
                                >
                            Jobs at athena
                            </a>
                            </li>
                            <li>
                            <a
                                href="http://kronosapp101.corp.athenahealth.com/wfc/applications/wtk/html/ess/logon.jsp"
                                >
                            Kronos (Timesheets)
                            </a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            <div className="col seconds">
                            <div className="menu-section">
                            <div className="menu-section-content">
                            <ul>
                            <li>
                            <a
                                href="https://identityiq101.corp.athenahealth.com/identityiq/home.jsf"
                                >
                            Manage Access (Identity IQ)
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://athenahealth.sharepoint.com/sites/onboarding"
                                >
                            Onboarding Portal
                            </a>
                            </li>
                            <li>
                            <a href="https://social.athenahealth.com/community/oracle">
                            Oracle Financials (Expenses &amp; POs)
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://athenahealth.sharepoint.com/sites/sales/"
                                >
                            Sales Portal
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://athenahealth.my.salesforce.com"
                                >Salesforce</a>
                            </li>
                            <li>
                            <a
                                href="https://sso.athenahealth.com/idp/startSSO.ping?PartnerSpId=http://www.workday.com"
                                >
                            Workday (PTO, Performance, Feedback)
                            </a>
                            </li>
                            <li>
                            <a href="/docs/DOC-1103">More...</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            </div>
                            </li>
                            <li className="has-menu">
                            <a className="nav-link" href="https://search.corp.athenahealth.com">
                            Enterprise Search
                            </a>
                            </li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
            {/* Navigational buttons/links */}
            <nav
                className="j-globalNav-bg row"
                role="navigation"
                aria-label="Jive"
                data-mode="custom">
            <div className="col-2">
            <ul
                id="j-globalNav "
                className="navbar-nav mr-auto"
                role="menubar"
                className="j-globalNav nav">
            <li
                id="customLink0"
                aria-haspopup="true"
                className=" j-globalNav-li j-ui-elem nav-item">
            <a
                href="/content"
                className="j-globalNavLink j-ui-elem "
                role="menuitem">
            <span className="nav-link   j-ui-elem">Browse<span className="j-nav-more jive-icon-glyph icon-arrow-down2" /></span>
            </a>
            <div
            id="customLink0-menu"
            className="j-pop-main j-menu j-quick-menu"
            style={{display: 'none'}}>
            <ul>
            <li>
            <a
                id="customLink0-0"
                href="/content"
                className="j-ui-elem">
            <span className="lnk">Content</span>
            </a>
            </li>
            <li>
            <a
                id="customLink0-1"
                href="/people"
                className="j-ui-elem">
            <span className="lnk">People</span>
            </a>
            </li>
            <li>
            <a
                id="customLink0-2"
                href="/places"
                className="j-ui-elem">
            <span className="lnk">Places</span>
            </a>
            </li>
            </ul>
            </div>
            </li>
            <li
                id="customLink1"
                className=" j-globalNav-li j-custom-link j-ui-elem">
            <a
                href="/community/community-help"
                className="j-globalNavLink j-ui-elem "
                role="menuitem">
            <span className="nav-link  ">Help</span>
            </a>
            </li>
            <div
            id="appQuickLaunchMenu"
            className="j-menu j-quick-menu"
            style={{display: 'none'}} />
            </ul>
          </div>
            <div id="j-links" className="col-10">
            <ul className="j-globalNav float-right mb-0">
              <li
                  className="j-nav-create j-nav-user j-globalNav-li js-satellite-nav-container"
                  aria-haspopup="true">
                  <div className="rounded m-2">
                    <a
                        id="j-satNav-inbox"
                        className="j-globalNavLink j-ui-elem j-satNav-inbox"
                        href="/inbox"
                        aria-label="Inbox">

                    <span
                        data-count={2}
                        tabIndex={-1}
                        aria-label="Unread inbox items"
                        className="j-js-update-indicator j-update-count j-navbadge-count j-ui-elem text-white p-2">
                        <FontAwesomeIcon icon="bell"  /> 2
                    </span>
                    </a>
                  </div>
              </li>
              <li
                  className="j-nav-create j-nav-cmenu j-globalNav-li js-create-nav-container text-white m-2"
                  aria-haspopup="true">
                  <FontAwesomeIcon icon="pencil-alt" />
              </li>
            <li className="j-nav-create j-nav-cmenu j-globalNav-li js-create-nav-container text-white m-2"
            aria-haspopup="true">
              <FontAwesomeIcon icon="hammer" />
            </li>
            <li className="j-nav-create j-nav-user j-globalNav-li js-satellite-nav-container text-white m-2"
            aria-haspopup="true">
            <FontAwesomeIcon icon="search"  />
            </li>
            </ul>

            </div>
            </nav>
        </header>

        )
    }
}

export default Header;
