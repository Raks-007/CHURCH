// Enhanced Church Website with Advanced Admin Features
class EnhancedChurchWebsite {
    constructor() {
        this.currentUser = null;
        this.isAdminLoggedIn = false;
        this.currentUserRole = 'visitor';
        this.userPermissions = [];
        this.tempImages = {};
        this.currentCalendarDate = new Date();
        this.youthCalendarDate = new Date();
        this.heroSwiper = null;
        
        // Enhanced Church Data Structure
        this.churchData = {
            // Hero Slider Data
            heroSlides: [
                {
                    id: 1,
                    title: "Welcome to Centenary Baptist Church",
                    description: "",
                    image: "ChurchDS.mp4",
                    link: ""
                }
            ],
            
            // Pastoral Team Data
            pastors: [
                {
                    id: 1,
                    name: "Rev. Dr. G.J. Niranjan Babu",
                    title: "Senior Pastor",
                    description: "Leading our congregation with wisdom and compassion for over 15 years. Rev. David holds a doctorate in theology and has dedicated his life to serving God and the community.",
                    phone: "+91-9849453668",
                    photo: "n.jpg",
                    isPrimary: true
                },
                {
                    id: 2,
                    name: "Rev. R. Moses",
                    title: "Assistant Pastor", 
                    description: "Focuses on youth ministry and evangelism. Rev. Wesley brings energy and passion to reaching the next generation for Christ.",
                    phone: "+91-9848697587",
                    photo: "",
                    isPrimary: false
                },
                {
                    id: 3,
                    name: "Rev. CH. Michael",
                    title: "Assistant Pastor",
                    description: "Dedicated to women's ministry and pastoral care. Rev. Paul provides spiritual guidance and support to our church families.",
                    phone: "+91-9866393612",
                    photo: "M.jpg",
                    isPrimary: false
                },
                {
                    id: 4,
                    name: "Rev. G. Ranjith Kumar",
                    title: "Assistant Pastor (Rural)",
                    description: "Handles Rural ministry",
                    phone: "+91-8886580028",
                    photo: "R.jpg",
                    isPrimary: false
                },
                 {
                    id: 4,
                    name: "Rev. Ashok Rathi",
                    title: "Hindi Pastor",
                    description: "Hindi Worship.",
                    phone: "+91-9490221200",
                    photo: "",
                    isPrimary: false
                },
            ],

            // Executive Committee Data
            executiveCommittee: [
                {
                    id: 1,
                    name: "Mr. T. Vijay Swaroop",
                    position: "President"
                },
                {
                    id: 2,
                    name: "Mr. N. Johnson Prasad",
                    position: "Vice - President - 1"
                },
                {
                    id: 3,
                    name: "Mr. J. Daniel Beltheshazar",
                    position: "Vice - President - 2"
                },
                {
                    id: 4,
                    name: "Dr. T. Christopher Reuben",
                    position: "Secretary"
                },
                {
                    id: 5,
                    name: "Mr. K. Vidyakar",
                    position: "Joint Secretary-1"
                },
                {
                    id: 6,
                    name: "Mr. N. Sunil Somasundaram",
                    position: "Joint Secretary-2"
                },
                {
                    id: 7,
                    name: "Dr. B. Wilson Vinay kumar",
                    position: "Treasurer"
                },
                {
                    id: 8,
                    name: "Mrs. T. Rupa Moses",
                    position: "Sunday School Supdt"
                },
                {
                    id: 9,
                    name: "Mr. P. Sundeep Raj",
                    position: "Youth Director"
                },
                {
                    id: 10,
                    name: "Mrs. P. Prameela Boaz",
                    position: "Women's Representative"
                },
                {
                    id: 11,
                    name: "Mr. T. Naveen Kumar",
                    position: "Chief Deacon"
                },
                {
                    id: 12,
                    name: "Mr. T. Paul",
                    position: "Deacon -1"
                },
                {
                    id: 13,
                    name: "Mr. P. John Prabhudas",
                    position: "Deacon - 2"
                },
                {
                    id: 14,
                    name: "Mrs. K. Sunitha Jai Singh",
                    position: "Deaconess - 1"
                },
                {
                    id: 15,
                    name: "Mrs. M. Deva Krupa Shadrach",
                    position: "Deaconess - 2"
                },
                {
                    id: 16,
                    name: "Mrs. K. Navamani Elijah",
                    position: "Deaconess - 3"
                },
                {
                    id: 17,
                    name: "Mr. M. Y. Joseph",
                    position: "E.C.Member (Men )"
                },
                {
                    id: 18,
                    name: "Mr. A. Paul Prasanna Kumar",
                    position: "E.C.Member (Men )"
                },
                {
                    id: 19,
                    name: "Mr. S. Thomas",
                    position: "E.C.Member (Men )"
                },
                {
                    id: 20,
                    name: "Mrs. B. Aparana Vijay",
                    position: "E.C.Member (Women )"
                },
                {
                    id: 21,
                    name: "Mrs. N. Pavani",
                    position: "E.C.Member (Women )"
                },
                {
                    id: 22,
                    name: "Mr. A. Benjamin Paul",
                    position: "Internal Auditor - 1"
                },
                {
                    id: 23,
                    name: "Mr. M. Satish Kumar",
                    position: "Internal Auditor - 2"
                },
                {
                    id: 24,
                    name: "Mr. T. S. Martin",
                    position: "Co-opted Member ( Men )"
                },
                {
                    id: 25,
                    name: "Mr. N. Robert Bruce",
                    position: "Co-opted Member ( Men )"
                },
                {
                    id: 26,
                    name: "Mrs. P. Hemalatha Balasundar",
                    position: "Co-opted Member (Women)"
                },
                {
                    id: 27,
                    name: "Dr. P. Ravi Kumar",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 28,
                    name: "Mr. M. Balraj",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 29,
                    name: "Mr. D. Madhukar Samuel",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 30,
                    name: "Mrs. P. Sumana Vidyasagarp",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 31,
                    name: "Mrs. O. Navamani James",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 32,
                    name: "Mrs. D. Victoria Rani Wilson",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 33,
                    name: "Mrs. K. Sharada Sadanandam",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 34,
                    name: "Mrs. A. Swarnalatha Samuel",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 35,
                    name: "Mrs. P. Simphonia Jayakar Johnson",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 36,
                    name: "Mr. H. Sunny Johnson",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 37,
                    name: "Mrs. P. Leelavathi Michael",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 38,
                    name: "Mrs. M. Prasuna Rani",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 39,
                    name: "Mrs. G. Ruth Anitha",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 40,
                    name: "Mr. Arther Stevenson",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 41,
                    name: "Mr. E.William carey",
                    position: "Addl.Co-opted Members"
                },
                {
                    id: 42,
                    name: "Mr. G.Chandra Shekher",
                    position: "Addl.Co-opted Members"
                },
    // ... more members (6 total in the guide)
],

// Sub-Committees Data
subCommittees: {
    Prayer: {
        name: "Prayer Committee",
        members: [
            { name: "Mr T Vijay Swaroop ", role: "Chairman" },
            { name: "Mr T Naveen Kumar ", role: "Convener" },
            { name: "Rev Ch Michael  ", role: "Member" },
            { name: "Rev R Moses  ", role: "Member" },
            { name: "Rev G Ranjith Kumar ", role: "Member" },
            { name: "Mrs Ch Lalithangini  ", role: "Member" },
            { name: "Mrs R Annie Moses  ", role: "Member" },
            { name: "Mrs R Divya Ranjith", role: "Member" },
            { name: "Mr N Johnson Prasad  ", role: "Member" },
            { name: "Mr J Daniel Beltheshazar", role: "Member" },
            { name: "Dr T Christopher Reuben  ", role: "Member" },
            { name: "Mr K Vidyakar ", role: "Member" },
            { name: "Mr N Sunil Somasundaram  ", role: "Member" },
            { name: "Dr B Wilson Vinay Kumar ", role: "Member" },
            { name: "Mrs O Navamani James ", role: "Member" },
            { name: "Mrs M Devakrupa Shadrach  ", role: "Member" },
            { name: "Mrs P Hemalatha Balasundar ", role: "Member" },
            { name: "Mrs P Prameela Boaz ", role: "Member" },
            { name: "Mrs P Bala Hanok ", role: "Member" },
            { name: "Mrs T Shobha Michael ", role: "Member" },
            { name: "Mrs T Deenamma Christopher", role: "Member" },
            { name: "Mrs P Deborah Patrick ", role: "Member" },
            { name: "Mrs T Shantha Prasad  ", role: "Member" },
            { name: "Mrs P Shobha Wilson ", role: "Member" },
            { name: "Mrs M Vimala Ebenezer ", role: "Member" },
            { name: "Mrs P Vasantha Johnson ", role: "Member" },
            { name: "Mrs K Sharadha Sadanandam", role: "Member" },
            { name: "Mrs T Rupa Moses  ", role: "Member" },
            { name: "Mr N Robert Bruce ", role: "Member" },
            { name: "Mr N Arther Stevenson ", role: "Member" },
            { name: "Mrs E Diana William Carey", role: "Member" },
            { name: "Mr E William Carey  ", role: "Member" },
            { name: "Mrs Devamma Venkataiah ", role: "Member" },
            { name: "Mr T David Moshe ", role: "Member" },
            { name: "Mr K Hananiah ", role: "Member" },
            { name: "Mrs B Grace Suresh", role: "Member" },
            { name: "Mrs Ch Esther Samuel", role: "Member" },
            { name: "Mr Ch Samuel ", role: "Member" },
            { name: "Mr G R James p ", role: "Member" },
            { name: "Mrs J Deepa Deva Dayakar", role: "Member" },
            { name: "Mr A Paul Prasan Kumar ", role: "Member" },
            { name: "Mrs B Ratnakumari Israel  ", role: "Member" },
            { name: "Mr G I Chandra Shekher ", role: "Member" },
            { name: "Mrs G Manjula Chandra Shekher ", role: "Member" },
            { name: "Mrs T Aruna Newton  ", role: "Member" }

            // ... more members
        ]
    },
    Choir: {
        name: "Choir Committee",
        members: [
            { name: "Mr T Paul  ", role: "Director" },
            { name: "Mr P Jeshrone Abraham ", role: "Convener" },
            { name: "Mr H Sunny Johnson ", role: "Co-Convener" },
            { name: "Mr P Sandeep Raj ", role: "Member" },
            { name: "Mrs P Prameela Boaz", role: "Member" },
            { name: "Mrs K Navamani Elijah ", role: "Member" },
            { name: "Mrs S Pushpaleela", role: "Member" },
            { name: "Mrs K Sharada Sadanandam", role: "Member" },
            { name: "Mrs A Swarnalatha Samuel ", role: "Member" },
            { name: "Mrs T Shantha Prasad", role: "Member" },
            { name: "Mr D Paranjyothi", role: "Member" },
            { name: "Prof P Ravi Kumar", role: "Member" },
            { name: "Mr P Nashone Abraham ", role: "Member" },
            { name: "Mrs J Rachel Joshua", role: "Member" },
            { name: "Mrs M Shiloh Kiran ", role: "Member" },
            { name: "Mr P Jason Abraham  ", role: "Member" },
            { name: "Mrs M Prasuna Latha", role: "Member" }
        ]
    },
    Hospital: {
        name: "Hospital Development Committee",
        members: [
            { name: "Mr T Vijay Swaroop ", role: "Chairman" },
            { name: "Dr JEB Nelson  ", role: "Vice Chairman" },
            { name: "Dr G L Bala Krishna", role: "Member" },
            { name: "Dr D Abhinav", role: "Member" },
            { name: "Dr D Suvarna ", role: "Member" },
            { name: "Dr P Johnson  ", role: "Member" },
            { name: "Dr N Samuel  ", role: "Member" },
            { name: "Rev G J Niranjan Babu", role: "Member" },
            { name: "Mrs G Prameela Sundar ", role: "Member" },
            { name: "Rev B Christopher", role: "Member" },
            { name: "Rev D Isaac  ", role: "Member" },
            { name: "Rev M Joseph Prabhakar", role: "Member" },
            { name: "Mr P Emmanuel", role: "Member" },
            { name: "Mr B Suresh", role: "Member" },
            { name: "Mr N Robert Bruce", role: "Member" },
            { name: "Mr A Christopher", role: "Member" },
            { name: "Mr N Johnson Prasad", role: "Member" },
            { name: "Mr J Daniel Beltheshazar", role: "Member" },
            { name: "Dr T Christopher Reuben ", role: "Member" },
            { name: "Mr K Vidyakar", role: "Member" },
            { name: "Mr N Sunil Somasundaram ", role: "Member" },
            { name: "Dr B Wilson Vinay Kumar", role: "Member" },
            { name: "Mr T S Martin  ", role: "Member" },
            { name: "Mr V Christopher", role: "Member" },
            { name: "Mr N Arther Stevenson", role: "Member" }
        ]
    },
    edifice: {
        name: "Edifice Committee",
        members: [
            { name: "Mr T Vijay Swaroop ", role: "Chairman" },
            { name: "Dr JEB Nelson", role: "Member" },
            { name: "Mrs G Prameela Sundar", role: "Member" },
            { name: "Prof P Ravi Kumar", role: "Member" },
            { name: "Mrs K Sunitha Jai Singh ", role: "Member" },
            { name: "Mr MB Jacob", role: "Member" },
            { name: "Mr TS Martin", role: "Member" },
            { name: "Mr M Y Joseph", role: "Member" },
            { name: "Mr N Johnson Prasad ", role: "Member" },
            { name: "Mr J Daniel Beltheshazar ", role: "Member" },
            { name: "Dr T Christopher Reuben  ", role: "Member" },
            { name: "Mr K Vidyakar ", role: "Member" },
            { name: "Mr N Sunil Somasundaram  ", role: "Member" },
            { name: "Dr B Wilson Vinay Kumar ", role: "Member" }
            
            // ... more members
        ]
    },
    Legal: {
        name: "Legal Committee",
        members: [
            { name: "Mr T Vijay Swaroop ", role: "Chairman" },
            { name: "Mr J Jeevarathnam ", role: "Member" },
            { name: "Mr K Ashirvadam  ", role: "Member" },
            { name: "Mr T Naveen Ernest", role: "Member" },
            { name: "Mrs T Anitha Naveen ", role: "Member" },
            { name: "Mr M Kiran Manohar ", role: "Member" },
            { name: "Mr R Kiran Kumar ", role: "Member" },
            { name: "Mr N Johnson Prasad ", role: "Member" },
            { name: "Mr J Daniel Beltheshazar ", role: "Member" },
            { name: "Dr T Christopher Reuben  ", role: "Member" },
            { name: "Mr K Vidyakar ", role: "Member" },
            { name: "Mr N Sunil Somasundaram  ", role: "Member" },
            { name: "Dr B Wilson Vinay Kumar ", role: "Member" },
            { name: "Mr P John Prabhudas", role: "Member" },
            { name: "Mr P Rapson ", role: "Member" },
            { name: "Mr M Dayanand ", role: "Member" },
            { name: "Mr KC Raju  ", role: "Member" },
            
            // ... more members
        ]
    },
    REACH: {
        name: "REACH Committee",
        members: [
            { name: "Mr N Johnson Prasad", role: "Chairman" },
            { name: "Mrs P Aparna Vijay", role: "Convener" },
            { name: "Mrs N Pavani", role: "Member" },
            { name: "Mrs T Asha Subhash", role: "Member" },
            { name: "Dr Sucharitha Paul ", role: "Member" },
            { name: "Mrs D Victoria Rani  ", role: "Member" },
            { name: "Mrs P Simphonia Jayakar Johnson", role: "Member" },
            { name: "Mrs Elizabeth Ravi ", role: "Member" },
            { name: "Ms P Martha Caroline  ", role: "Member" },
            { name: "Mrs M Prasun Latha ", role: "Member" },
            
            // ... more members
        ]
    },
    WCBHS : {
        name: "WCBHS  Committee",
        members: [
            { name: "Mr K Vidyakar", role: "Chairman" },
            { name: "Mr M Satish Kumar ", role: "Convener" },
            { name: "Mr J Daniel Beltheshazar ", role: "Member" },
            { name: "Mrs K Anitha Vidyakar", role: "Member" },
            { name: "Mrs B Aparna Vijay ", role: "Member" },
            { name: "Mr B Vijay Kumar", role: "Member" },
            { name: "Mrs J Ruth Anitha ", role: "Member" },
            { name: "Mrs B Sumana Vidyasagar", role: "Member" },
            { name: "Mr D Madhukar Samuel ", role: "Member" },
            { name: "Mr S Thomas", role: "Member" },
            { name: "Mr M Y Manohar ", role: "Member" },
            { name: "Mrs A Florence Benjamin ", role: "Member" },
            { name: "Mrs B Jacquelin Johnson", role: "Member" },
            { name: "Mrs H Praneethi Sunny Johnson ", role: "Member" },
           
            // ... more members
        ]
    },
    Rural: {
        name: "Rural Evangelism Committee",
        members: [
            { name: "Mr J Daniel Beltheshazar", role: "Chairman" },
            { name: "Rev G Ranjith Kumar", role: "Rural Pastor " },
            { name: "Mr Bunga Vidyasagar  ", role: "Convener" },
            { name: "Mr V Vidyasagar", role: "Convener" },
            { name: "Mr T Jayaraj  ", role: "Convener" },
            { name: "Mrs G Divya Ranjith  ", role: "Member" },
            { name: "Mr M Y Joseph", role: "Member" },
            { name: "Mrs P Prameela Boaz ", role: "Member" },
            { name: "Mrs T Shanta Prasad ", role: "Member" },
            { name: "Mrs K Navamani Elijah ", role: "Member" },
            { name: "Mrs E Diana William Carey", role: "Member" },
            { name: "Mr E William Carey ", role: "Member" },
            { name: "Mrs P Hemalatha Balasundar", role: "Member" },
            { name: " Mr N Arther Stevenson ", role: "Member" },
            { name: "Mr A Paul Prasan Kumar ", role: "Member" },
            { name: "Mr T Paul", role: "Member" },
            { name: "Mrs K Sharada Sadanandam ", role: "Member" },
            { name: "Mrs T Sumalatha", role: "Member" },
            { name: "Mrs S Pushpa Leela", role: "Member" },
            { name: "Mr Ch Samuel ", role: "Member" },
            { name: "Mrs Esther Samuel", role: "Member" },
            { name: "Mr Sangala Prabhakar ", role: "Member" },
            { name: "Mr B Devender", role: "Member" },
            { name: "Mr K Joshua ", role: "Member" },
            { name: "Mrs N Roseline Johnson", role: "Member" },
            
            // ... more members
        ]
    },
    EnglishService: {
        name: "English Service Committee",
        members: [
            { name: "Dr T Christopher Reuben  ", role: "Chairman" },
            { name: "Mr P Sandeep Raj ", role: "Member" },
            { name: "Mr H Sunny Johnson ", role: "Member" },
            { name: "Mrs B Sumana Vidyasagar", role: "Member" },
            { name: "Mrs B Aparna Vijay", role: "Member" },
            { name: "Mrs K Anitha Vidyakar", role: "Member" },
            { name: "Mr B Vijay Kumar", role: "Member" },
            { name: "Mrs P Roseline ", role: "Member" },
            { name: "Mrs N Pavani", role: "Member" },
            { name: "Mr H Bunny Charles ", role: "Member" },
            
            // ... more members
        ]
    },
    Arrangements: {
        name: "Arrangements Committee",
        members: [
            { name: "Mr N Sunil Somasundaram ", role: "Chairman" },
            { name: "Mr Jai Singh  ", role: "Member" },
            { name: "Mr A Paul Prasan Kumar", role: "Member" },
            { name: "Mr T Paul", role: "Member" },
            { name: "Mr N Robert Bruce ", role: "Member" },
            { name: "Mr T Naveen Kumar", role: "Member" },
            { name: "Mr P John Prabhudas ", role: "Member" },
            { name: "Mr P Sandeep Raj ", role: "Member" },
            { name: "Mrs B Aparna Vijay ", role: "Member" },
            { name: "Mr B Vijay Kumar", role: "Member" },
            { name: "Mrs N Pavani ", role: "Member" },
            { name: "Mrs K Deepa Emmanuel  ", role: "Member" },
            { name: "Mr N Arthur Stevenson ", role: "Member" },
            { name: "Mr S Thomas ", role: "Member" },
            { name: "Mrs V Sujalatha Ravinder ", role: "Member" },
            { name: "Mr G Daniel Sundar ", role: "Member" },
            { name: "Mr M Y Jayakar", role: "Member" },
            { name: "Mr T Moses Smiles", role: "Member" },
            { name: "Mr G I Chandra Shekher", role: "Member" },
            { name: "Mr P Cecil Stevenson ", role: "Member" },
            { name: "Mr K Vinod Kumar", role: "Member" },
            { name: "Mr K Sadanandam ", role: "Member" },
            { name: "Mr M Y Manohar ", role: "Member" },
            { name: "Mr T Prashanth", role: "Member" },
            { name: "Mr B Vidyasagar", role: "Member" },
            { name: "Mr K Joshua", role: "Member" },
            { name: "Mr K Raj Kumar", role: "Member" },
            { name: "Mr S Amos ", role: "Member" },
            { name: "Mr M Srikanth", role: "Member" },
            { name: "Mr K Vipin Johnston", role: "Member" },
            { name: "Mr K Sunil Prakash ", role: "Member" },
            { name: "Mr K Alexander  ", role: "Member" },
            { name: "Mr T Sunil Kumar ", role: "Member" },
            { name: "Mr S Venus", role: "Member" },
            { name: "Mr M Ebenezer", role: "Member" },
            { name: "Mr T Paramjyothi ", role: "Member" },
            { name: "BYF ", role: "Member" },
           
            // ... more members
        ]
    },
    Finance: {
        name: "Finance Committee",
        members: [
            { name: "Dr B Wilson Vinaya Kumar", role: "Chairman" },
            { name: "Dr JEB Nelson", role: "Member" },
            { name: "Mr K Venkat Ratnam ", role: "Member" },
            { name: "Prof P Ravi Kumar", role: "Member" },
            { name: "Mr M B Jacob", role: "Member" },
            { name: "Mr T Vijay Swaroop", role: "Member" },
            { name: "Mr N Johnson Prasad ", role: "Member" },
            { name: "Mr J Daniel Beltheshazar ", role: "Member" },
            { name: "Dr T Christopher Reuben", role: "Member" },
            { name: "Mr K Vidyakar", role: "Member" },
            { name: "Mr N Sunil Somasundaram", role: "Member" },
            { name: "Mr B Vijay Kumar ", role: "Member" },
            { name: "Mr P Nixon Raj ", role: "Member" },
            { name: "Mr Ponnada Sathish ", role: "Member" },
            { name: "Mr L P Raj Kumar", role: "Member" },
            { name: "Mr M Balaraj ", role: "Member" },
            { name: "Mr C Sudhakar", role: "Member" },
            { name: "Mr T Prabhakar ", role: "Member" },
            
            // ... more members
        ]
    },
    JDEdwardTheological: {
        name: ". JD Edward Theological Committee",
        members: [
            { name: "Rev Dr G J Niranjan Babu", role: "Principal " },
            { name: "Rev R Moses ", role: "Vice - Principal" },
            { name: "Rev Dr John Kuncham", role: "Faculty Member" },
            { name: "Rev R Joseph ", role: "Faculty Member" },
            { name: "Rev G Ranjith Kumar ", role: "Faculty Member" },
            { name: "Rev V Ramu ", role: "Faculty Member" },
            { name: "Rev M Uday Samuel ", role: "Faculty Member" },
            { name: "Mr T Vijay Swaroop ", role: "Member" },
            { name: "Dr T Christopher Reuben ", role: "Member" },
            { name: "Dr B Wilson Vinay Kumar", role: "Member" },
            { name: "Mr T Dayaraju ", role: "Member" },
            
            // ... more members
        ]
    },
    Elders: {
        name: "Elders Committee",
        members: [
            { name: "Mr A Prem Kumar ", role: "Chairman" },
            { name: "Dr JEB Nelson  ", role: "Member" },
            { name: "Mr K Venkat Ratnam  ", role: "Member" },
            { name: "Mr N Jaichander Alexander", role: "Member" },
            { name: "Mr D Andrew Joseph", role: "Member" },
            { name: "Mr M B Jacob", role: "Member" },
            { name: "Mr Dara Chandraiah", role: "Member" },
            { name: "Mr T M Prabhakar", role: "Member" },
            { name: "Mr T Moshe", role: "Member" },
            { name: "Mr J Jeevarathnam", role: "Member" },
            { name: "Mrs T Suguna Ebenezer", role: "Member" },
            { name: "Mrs B Krupamma John ", role: "Member" },
            { name: "Mrs T Deenamma Christopher", role: "Member" },
            { name: "Mr B Williams", role: "Member" },
            { name: "Mr J I Bhaskar", role: "Member" },
            { name: "Mrs G Prameela Sundar ", role: "Member" },
            { name: "Mrs Rupa Dawson  ", role: "Member" },
            { name: "Mrs D Premalatha Victor", role: "Member" },
            { name: "Mr Dhanuka Vinod", role: "Member" },
            { name: "Mrs T Vasantha Vani ", role: "Member" },
            { name: "Mrs P Shobha Sucheta ", role: "Member" },
            { name: "Mr GR James ", role: "Member" },
            { name: "Mrs K Blandina Anand", role: "Member" },
            { name: "Mrs M Esther Rani ", role: "Member" },
            { name: "Mr S Issac", role: "Member" },
            { name: "Mr M Balraj ", role: "Member" },
            { name: "Mr B Ram Chander", role: "Member" },
            { name: "Mrs C Suvartha Balraj ", role: "Member" },
            { name: "Mrs T Shyamala Christopher ", role: "Member" },
            { name: "Mr B Clement ", role: "Member" },
           
            // ... more members
        ]
    },
    ConstitutionAmendment: {
        name: "Constitution Amendment Committee",
        members: [
            { name: "Mr T Vijay Swaroop ", role: "Chairman" },
            { name: "Mr N Johnson Prasad ", role: "Member" },
            { name: "Mr J Daniel Beltheshazar", role: "Member" },
            { name: "Dr T Christopher Reuben", role: "Member" },
            { name: "Mr K Vidyakar", role: "Member" },
            { name: "Mr N Sunil Somasundaram", role: "Member" },
            { name: "Dr B Wilson Vinay Kumar", role: "Member" },
            { name: "Dr JEB Nelson", role: "Member" },
            { name: "Mr K Venkat Rathnam", role: "Member" },
            { name: "Mr A Prem Kumar", role: "Member" },
            { name: "Mrs G Prameela Sunder ", role: "Member" },
            { name: "Mr J Jeevarathnam ", role: "Member" },
            { name: "Mr K Ashirvadam ", role: "Member" },
            { name: "Mr T Naveen Kumar", role: "Member" },
            { name: "Mr P John Prabhudas", role: "Member" },
            { name: "Mr P Sandeep Raj ", role: "Member" },
            { name: "Mr M Dayanand ", role: "Member" },
            
            // ... more members
        ]
    },
    HindiService: {
        name: "Hindi Service Committee",
        members: [
            { name: "Rev Ashok Rathi", role: "Pastor" },
            { name: "Mr Jai Singh", role: "Convener" },
            { name: "Mrs K Sunitha Jai Singh", role: "Member" },
            { name: "Mr Digvijay Singh", role: "Member" },
            { name: "Mr Ch Vimal Raj ", role: "Member" },
            { name: "Mrs Ch Indira Priyadarshini ", role: "Member" },
            { name: "Mrs P Hemalatha Balasundar ", role: "Member" },
            { name: "Mrs D Victoria Rani", role: "Member" },
            { name: "Mrs T Shobha Michael", role: "Member" },
            { name: "Mrs Ch Tirumala ", role: "Member" },
            { name: "Mrs M Shiloh Kiran", role: "Member" },
            { name: "Ms K Abhinava", role: "Member" },
            { name: "Ms D Indira Swaroopa Rani", role: "Member" },
            
            // ... more members
        ]
    },
    VocationalCourser: {
        name: "Vocational Course Committee",
        members: [
            { name: "Mr N Johnson Prasad ", role: "Principal" },
            { name: "Mr S Thomas", role: "Vice – Principal" },
            { name: "Mrs Ch Ramyasri  ", role: "Tutor" },
            { name: "Ms V Margaret ", role: "Tutor" },
            { name: "Mr T Vijay Swaroop", role: "Member" },
            { name: "Dr T Christopher Reuben ", role: "Member" },
            { name: "Dr B Wilson Vinay Kumar", role: "Member" },
            { name: "Mrs T Victoria Vijay Swaroop ", role: "Member" },
            { name: "Mrs K Kamala Surendar  ", role: "Member" },
            { name: "Mrs M Swapna Jayakar ", role: "Member" },
           
            // ... more members
        ]
    }
    // ... more committees (5 total)
},
            
            // Calendar Events
            events: [
                {
                    id: 1,
                    title: "Harvest Festival",
                    date: "2025-11-01",
                    time: "09:30 AM",
                    description: "Join us for our annual harvest festival celebration",
                    ministry: "general"
                },
                {
                    id: 2,
                    title: "Youth Sunday",
                    date: "2025-10-12",
                    time: "09:30",
                    description: "Special service led by our youth ministry",
                    ministry: "youth"
                },
                {
                    id: 3,
                    title: "Christmas",
                    date: "2025-12-25",
                    time: "09:30",
                    description: "Christmas Eve celebration with carols and drama",
                    ministry: "general"
                }
            ],
            
            // Contact Information
            contact: {
                address: "Church Street, Hanamkonda, Telangana 506001",
                phone: "0870-2578026",
                email: "cbchnk1880@gmail.com"
            },
            
            // Service Times
            serviceTimes: [
                { day: "Sunday", service: "Sunday School", time: "07:30 AM", description: "Bible study for all age groups" },
                { day: "Sunday", service: "Morning Worship", time: "09:30 AM", description: "Main worship service with sermon and communion" },
                { day: "Monday", service: "Cottage prayer meetings", time: "07:00 PM", description: "Prayer at Church members houses" },
                { day: "Tuesday", service: "EC and Sub committees prayers", time: "07:00 PM to 08:00 PM", description: "Prayers" },
                { day: "Wednesday", service: "Bible Study", time: "7:00 PM", description: "Midweek Bible study and prayer" },
                { day: "Thursday", service: "Cottage prayer meetings", time: "07:00 PM", description: "Prayer at Church members houses" },
                { day: "Friday", service: "Fasting prayers", time: "12:00 PM to 03:00 PM", description: "Fasting prayers" },
                { day: "Friday", service: "Choir practice", time: "07:00 PM", description: "Choir Practice" }
            ],
            
            // Live Stream Configuration
            liveStream: {
                isLive: false,
                source: "direct", // "direct" or "youtube"
                directStreamUrl: "",
                youtubeStreamUrl: "",
                nextService: "Sunday 09:30 AM - Morning Worship",
                quality: "hd"
            },
            
            // Ministry Data
            ministries: {
                sundaySchool: {
                    banner: "",
                    description: "Christian Worship Every Sunday 7:30 AM with age-appropriate lessons for all family members.",
                    groups: [
                        { name: "Children (3-12 years)", description: "Interactive Bible stories, songs, and activities", time: "7:30 AM - 8:30 AM" },
                        { name: "Youth (13-25 years)", description: "Contemporary worship and relevant Bible study", time: "7:30 AM - 8:30 AM" },
                        { name: "Adults (26+ years)", description: "In-depth Bible study and prayer time", time: "7:30 AM - 8:30 AM" }
                    ]
                },
                
                youth: {
                    banner: "",
                    calendar: {
                        events: [
                            { title: "Youth Fellowship", date: "2025-09-28", description: "Weekly fellowship meeting" },
                            { title: "Youth Retreat Planning", date: "2025-10-05", description: "Planning meeting for annual retreat" },
                            { title: "Youth Sunday Preparation", date: "2025-10-08", description: "Rehearsal for Youth Sunday" }
                        ]
                    },
                    programs: [
                        {
                            name: "Youth Fellowship",
                            schedule: "Every Saturday 7:00 PM",
                            description: "Weekly fellowship for ages 13-25 with worship, games, and Bible study",
                            leader: "Pastor Rev.R. Moses"
                        },
                        {
                            name: "Youth Choir",
                            schedule: "Every Friday 7:00 PM",
                            description: "Young voices praising God through music and song",
                            leader: "Tangirala Paul"
                        }
                    ],
                    events: [
                        {
                            name: "Youth Retreat 2025",
                            date: "2025-10-15",
                            description: "Annual spiritual retreat at Hill View Resort"
                        }
                    ],
                    gallery: [],
                    testimonies: [
                        {
                            id: 1,
                            name: "Sarah Johnson",
                            role: "Youth Leader",
                            quote: "Being part of this youth ministry has transformed my life. The love and support from our church family is incredible.",
                            date: "2025-09-20"
                        }
                    ]
                },
                women: {
                    about: "The Women's Ministry at Centenary Baptist Church exists to encourage women in their relationship with Christ, provide opportunities for fellowship, and equip them for service in the church and community.",
                    bibleStudy: [
                        {
                            name: "Monday Morning Bible Study",
                            time: "10:00 AM - 11:30 AM",
                            description: "In-depth study of Scripture with fellowship",
                            leader: "Sister Ruth David"
                        },
                        {
                            name: "Evening Bible Study",
                            time: "7:00 PM - 8:00 PM (Thursdays)",
                            description: "Bible study for working women",
                            leader: "Sister Mary Paul"
                        }
                    ],
                    prayerGroups: [
                        {
                            name: "Intercessory Prayer Group",
                            time: "First Saturday 9:00 AM",
                            description: "Monthly prayer meeting for intercession and spiritual support",
                            focus: "Church, community, and global missions"
                        }
                    ],
                    retreats: [
                        {
                            name: "Annual Women's Retreat",
                            date: "2025-11-20",
                            location: "Hill View Resort",
                            theme: "Daughters of the King",
                            description: "Weekend retreat for spiritual renewal and sisterhood"
                        }
                    ],
                    events: [
                        {
                            title: "Women's Fellowship Dinner",
                            date: "2025-10-25",
                            description: "Monthly fellowship dinner with testimonies and sharing"
                        }
                    ]
                },
                men: {
                    about: "The Men's Ministry at Centenary Baptist Church exists to encourage men in their relationship with Christ, provide opportunities for fellowship, and equip them for service in the church and community.",
                    bibleStudy: [
                        {
                            name: "xxxxxxx",
                            time: "xxxxxx",
                            description: "xxxxxxx",
                            leader: "xxxxxx"
                        },
                        {
                            name: "xxxxxx",
                            time: "xxxxxxx",
                            description: "xxxxxx",
                            leader: "xxxxxxx"
                        }
                    ],
                    prayerGroups: [
                        {
                            name: "xxxx",
                            time: "xxxxx",
                            description: "xxxxx",
                            focus: "xxxxx"
                        }
                    ],
                    retreats: [
                        {
                            name: "xxxx",
                            date: "xxx",
                            location: "xxxx",
                            theme: "xxxxx",
                            description: "xxxxx"
                        }
                    ],
                    events: [
                        {
                            title: "xxxx",
                            date: "xxxx",
                            description: "xxxx"
                        }
                    ]
                },
                rural: {
                    mission: "Taking God's love to remote villages through practical service and spiritual guidance. We believe in reaching every village with the Gospel of Jesus Christ.",
                    programs: [
                        {
                            name: "Village Bible School",
                            description: "Teaching literacy and Bible stories in rural areas",
                            locations: ["Janagama", "Geesugonda", "Inavolu"]
                        },
                        {
                            name: "Mobile Medical Camps",
                            description: "Free healthcare services in remote villages",
                            schedule: "Monthly visits to 8 villages"
                        }
                    ],
                    churches: [
                        {
                            id: 1,
                            name: "Janagama Baptist Church",
                            location: "Janagama Village, Warangal District",
                            pastor: "Rev. Daniel Kumar",
                            established: "1985",
                            members: "45 families",
                            image: ""
                        },
                        {
                            id: 2,
                            name: "Geesugonda Baptist Church", 
                            location: "Geesugonda Village, Warangal District",
                            pastor: "Rev. Peter Raju",
                            established: "1990",
                            members: "38 families",
                            image: ""
                        }
                    ]
                },
                
                reach: {
                    about: "REACH Ministry focuses on reaching children and families in our community with the love of Christ through various outreach programs, educational support, and mentorship opportunities.",
                    programs: [
                        {
                            name: "After School Program",
                            description: "Educational support and mentorship for children ages 6-12",
                            schedule: "Monday-Friday 3:00 PM - 6:00 PM"
                        },
                        {
                            name: "Summer Bible Camp",
                            description: "Fun, faith-filled activities during summer break",
                            schedule: "May-June annually"
                        },
                        {
                            name: "Family Support",
                            description: "Resources and assistance for families in need",
                            schedule: "As needed"
                        }
                    ]
                },
                
                hospital: {
                    name: "Baptist Mission Hospital",
                    mission: "Providing compassionate healthcare with Christian love and service to all who seek healing and hope.",
                    visitingHours: "9:00 AM - 6:00 PM daily",
                    emergency: "24/7 Emergency Services Available",
                    prayerTime: "Daily at 12:00 PM",
                    doctors: [
                        {
                            id: 1,
                            name: "DR. G. L. BALAKRISHNA",
                            specialization: "ENT & ANESTHESIA",
                            experience: "15 years experience",
                            timings: "Mon-Sat 9:00 AM - 5:00 PM",
                            phone: "+91-9876543213"
                        },
                        {
                            id: 2,
                            name: "DR. M. SRIKANTH",
                            specialization: "BHMS, MD (H)",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 3,
                            name: "DR. G. AKANKSHA",
                            specialization: "MBBS",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 4,
                            name: "DR. G. SRAVANTH SHARMA",
                            specialization: "MD GENERAL MEDICINE",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 5,
                            name: "DR. M. MEGHANA",
                            specialization: "MD GENERAL MEDICINE",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 6,
                            name: "DR Y. SHIRISHMA",
                            specialization: "MD GENERAL MEDICINE",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 7,
                            name: "DR. KANCHA NARESH",
                            specialization: "MD,DM NEUROLOGY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 8,
                            name: "DR. A. BHAGEERATH",
                            specialization: "MD,DM CARDIOLOGY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 9,
                            name: "DR. R. SURESH",
                            specialization: "MD PULMONOLOGY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 10,
                            name: "DR. SURABHI PANDYA",
                            specialization: "MS (OBG) GYNAECOLOGY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 11,
                            name: "DR. M. SUVARNA",
                            specialization: "MS (OBG) GYNAECOLOGY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 12,
                            name: "DR AMITHA ALUGOLU",
                            specialization: "MBBS (DGO) GYNAECOLOGY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 13,
                            name: "DR. ASHRITHA RAO",
                            specialization: "MD PAEDIATRICS",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 14,
                            name: "DR. B. POORNA CHANDER",
                            specialization: "MS GENERAL SURGERY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 15,
                            name: "DR. N. NALIN KRISHNA",
                            specialization: "MS GENERAL SURGERY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 16,
                            name: "DR. D. AGASTYA",
                            specialization: "MS GENERAL SURGERY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 17,
                            name: "DR. J. RAJENDRA PRASAD REDDY",
                            specialization: "MS ENT",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 18,
                            name: "DR. K. DAYASAGAR REDDY",
                            specialization: "MBBS, DNB ORTHOPAEDICS",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 19,
                            name: "DR. AMBATI AJAY KUMAR",
                            specialization: "MBBS, DNB ORTHOPAEDICS",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 20,
                            name: "DR. CH. VIJAY KUMAR",
                            specialization: "MS ENT",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 21,
                            name: "DR. D. NAMRATHA",
                            specialization: "MS PSYCHIATRY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 22,
                            name: "DR. D. ABHINAV",
                            specialization: "MBBS",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 23,
                            name: "DR. MD. THAJUDDIN",
                            specialization: "BPT PHYSIOTHERAPHY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 24,
                            name: "DR. T. NAGARAJU",
                            specialization: "BDS, MDS DENTAL AND MAXILLOFACIAL TRAUMA SURGERY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                        {
                            id: 25,
                            name: "DR. M. SUSHMITHA",
                            specialization: "BDS, MDS (SR OSM), DENTAL AND MAXILLOFACIAL TRAUMA SURGERY",
                            experience: "10 years experience",
                            timings: "Mon-Fri 10:00 AM - 4:00 PM",
                            phone: "+91-9876543214"
                        },
                    ],
                    facilities: [
                        {
                            name: "General Medicine",
                            description: "Comprehensive primary healthcare services"
                        },
                        {
                            name: "Pediatrics",
                            description: "Specialized care for children and adolescents"
                        },
                        {
                            name: "Maternity Care",
                            description: "Safe delivery and comprehensive maternal health"
                        },
                        {
                            name: "Emergency Services",
                            description: "24/7 emergency medical care"
                        }
                    ],
                    labs: [
                        {
                            name: "Pathology Lab",
                            description: "Complete blood work and diagnostic testing",
                            timings: "7:00 AM - 7:00 PM"
                        }
                    ],
                    events: [
                        {
                            title: "Free Health Camp",
                            date: "2025-10-15",
                            description: "Free medical checkups for rural communities"
                        }
                    ]
                },
                
                school: {
                    about: "Centenary Baptist School provides quality Christian education from kindergarten through grade 12, integrating faith with academic excellence. Our dedicated faculty nurtures young minds in a Christ-centered environment.",
                    programs: [
                        { name: "Elementary (K-5)", description: "Foundation building with Christian values" },
                        { name: "Middle School (6-8)", description: "Character development and academic growth" },
                        { name: "High School (9-10)", description: "College preparation with Christian worldview" }
                    ],
                    staff: [
                        {
                            id: 1,
                            name: "Mrs. Grace Thompson",
                            position: "Principal",
                            qualification: "M.Ed, B.Ed",
                            experience: "20 years in Christian education",
                            email: "principal@cbschool.org"
                        },
                        {
                            id: 2,
                            name: "Mr. David Kumar",
                            position: "Vice Principal",
                            qualification: "M.Sc, B.Ed",
                            experience: "15 years teaching experience",
                            email: "vp@cbschool.org"
                        }
                    ],
                    events: [
                        {
                            title: "Annual Day Celebration",
                            date: "2025-12-15",
                            description: "Celebrating student achievements and talents"
                        }
                    ]
                },
                theologicalCollege: {
                    banner: "",
                    about: "Centenary Theological College is dedicated to training and equipping future pastors, ministers, and Christian leaders with solid biblical foundation, theological knowledge, and practical ministry skills.",
                    programs: [
                        { name: "Bachelor of Theology (B.Th)", duration: "4 years", description: "Comprehensive theological education covering Old Testament, New Testament, Systematic Theology, and Church History.", fees: "Contact office for details" },
                        { name: "Master of Divinity (M.Div)", duration: "3 years", description: "Advanced theological studies for pastoral ministry with emphasis on preaching, counseling, and church leadership.", fees: "Contact office for details" },
                        { name: "Certificate in Ministry", duration: "1 year", description: "Basic ministry training for lay leaders and church workers.", fees: "Contact office for details" }
                    ],
                    faculty: [
                        { id: 1, name: "Dr. Samuel Matthew", qualification: "Ph.D. in Theology", experience: "20 years", specialization: "Old Testament Studies", email: "samuel@cbctheological.org" },
                        { id: 2, name: "Rev. Dr. Grace Wilson", qualification: "D.Min, M.Div", experience: "15 years", specialization: "Pastoral Ministry", email: "grace@cbctheological.org" }
                    ],
                    events: [
                        { title: "Theological Conference", date: "2025-11-15", description: "Annual theological conference with guest speakers" }
                    ],
                    gallery: []
                },
                vocationalCourses: {
                    banner: "",
                    about: "Our Vocational Training Center empowers individuals with practical skills and technical knowledge to achieve economic independence and contribute meaningfully to society while maintaining Christian values.",
                    courses: [
                        { name: "Computer Applications & IT Skills", duration: "6 months", fees: "â‚¹5,000", description: "Basic to advanced computer skills including MS Office, Internet usage, Email, and basic programming." },
                        { name: "Tailoring & Fashion Design", duration: "8 months", fees: "â‚¹8,000", description: "Complete tailoring course from basic stitching to advanced fashion design and garment construction." },
                        { name: "Electrical & Electronics", duration: "12 months", fees: "â‚¹12,000", description: "Comprehensive training in electrical wiring, appliance repair, and basic electronics." },
                        { name: "Beauty & Wellness", duration: "4 months", fees: "â‚¹6,000", description: "Professional beauty treatments, hair styling, makeup, and wellness therapies." }
                    ],
                        instructors: [
                            { id: 1, name: "Mr. David Kumar", specialization: "Computer Applications", experience: "10 years", qualification: "MCA, PGDCA" },
                            { id: 2, name: "Mrs. Sarah Johnson", specialization: "Fashion Design", experience: "8 years", qualification: "Diploma in Fashion Design" }
                    ],
                        events: [
                            { title: "Skills Exhibition", date: "2025-12-01", description: "Annual exhibition showcasing student projects and skills" }
                    ],
                        gallery: []
                 }
            },
            
            // Offerings Data
            offerings: {
                message: "Your generous offerings help us serve God and our community through various ministries and outreach programs. Thank you for your faithful support.",
                upiQRCode: "QR.jpg",
                bankDetails: {
                    accountName: "Centenary Baptist Church Hanamkonda",
                    accountNumber: "52201541300",
                    ifscCode: "SBIN0020150",
                    bankName: "State Bank of India"
                },
                donations: []
            },
            
            // Updates/News Data
            updates: [
                {
                    id: 1,
                    title: "Centenary Celebration Preparations",
                    date: "2025-09-25",
                    content: "We are excited to announce the preparation for our 100th anniversary celebration. Special events and programs are being planned throughout the year.",
                    image: ""
                },
                {
                    id: 2,
                    title: "New Live Streaming Equipment",
                    date: "2025-09-20",
                    content: "We have installed new HD streaming equipment to provide better quality live streaming of our services. Join us online every Sunday!",
                    image: ""
                }
            ]
        };
        
        // Sub-Admin Management
        this.subAdmins = [
            {
                id: 1,
                username: "youth_admin",
                password: "youth123",
                fullName: "John Wesley",
                email: "john@cbchnk.org",
                role: "sub-admin",
                permissions: ["ministries", "calendar", "updates"],
                createdDate: "2025-09-01"
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderAllContent();
        this.initializeCalendar();
        this.initializeYouthCalendar();
        this.initializeHeroSlider();
        this.showSection('home');
        
        // Update footer after short delay
        setTimeout(() => {
            this.updateFooterContent();
        }, 100);
    }
    
    // Event Listeners Setup
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('[data-section]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                this.showSection(section);
                this.setActiveNavLink(link);
            });
        });
        
        // Mobile menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
        
        // Admin controls
        this.setupAdminControls();
        
        // Forms
        this.setupForms();
        
        // Calendar navigation
        this.setupCalendarControls();
        
        // Ministry tabs
        this.setupMinistryTabs();
        
        // Stream controls
        this.setupStreamControls();

        // About section tabs
        this.setupAboutTabs();
    }
    
    setupAdminControls() {
        // Login controls
        const adminLoginBtn = document.getElementById('admin-login-btn');
        const adminDashboardBtn = document.getElementById('admin-dashboard-btn');
        const logoutBtn = document.getElementById('logout-btn');
        
        if (adminLoginBtn) {
            adminLoginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showLoginModal();
            });
        }
        
        if (adminDashboardBtn) {
            adminDashboardBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSection('admin-dashboard');
                this.setActiveNavLink(e.target);
            });
        }
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
        
        // Modal controls
        const closeModal = document.getElementById('close-modal');
        const loginForm = document.getElementById('admin-login-form');
        const loginModal = document.getElementById('admin-login-modal');
        
        if (closeModal) {
            closeModal.addEventListener('click', () => this.hideLoginModal());
        }
        
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }
        
        if (loginModal) {
            loginModal.addEventListener('click', (e) => {
                if (e.target.id === 'admin-login-modal') {
                    this.hideLoginModal();
                }
            });
        }
        
        // Admin tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tabId = btn.getAttribute('data-tab');
                this.switchAdminTab(tabId);
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Sub-admin controls
        this.setupSubAdminControls();
    }
    
    setupSubAdminControls() {
        const addSubAdminBtn = document.getElementById('add-sub-admin-btn');
        const managePermissionsBtn = document.getElementById('manage-permissions-btn');
        const subAdminModal = document.getElementById('sub-admin-modal');
        const closeSubAdminModal = document.getElementById('close-sub-admin-modal');
        const cancelSubAdmin = document.getElementById('cancel-sub-admin');
        const subAdminForm = document.getElementById('sub-admin-form');
        
        if (addSubAdminBtn) {
            addSubAdminBtn.addEventListener('click', () => {
                this.showSubAdminModal();
            });
        }

         if (managePermissionsBtn) {
            managePermissionsBtn.addEventListener('click', () => {
                this.showSubAdminModal();
            });
        }
        
        if (closeSubAdminModal) {
            closeSubAdminModal.addEventListener('click', () => {
                this.hideSubAdminModal();
            });
        }
        
        if (cancelSubAdmin) {
            cancelSubAdmin.addEventListener('click', () => {
                this.hideSubAdminModal();
            });
        }
        
        if (subAdminForm) {
            subAdminForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubAdminSubmission();
            });
        }
        
        if (subAdminModal) {
            subAdminModal.addEventListener('click', (e) => {
                if (e.target.id === 'sub-admin-modal') {
                    this.hideSubAdminModal();
                }
            });
        }
    }
    
    setupForms() {
        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmission();
            });
        }
        
        // Donation form
        const donationForm = document.getElementById('donation-form');
        if (donationForm) {
            donationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleDonationSubmission();
            });
        }
        
        // Admin forms
        this.setupAdminForms();
    }
    
    setupAdminForms() {
        const forms = [
            'slider-form',
            'event-form',
            'stream-form',
            'update-form',
            'offerings-form',
            'contact-admin-form'
        ];
        
        forms.forEach(formId => {
            const form = document.getElementById(formId);
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleAdminFormSubmission(formId);
                });
            }
        });
        
        // Ministry selector
        const ministrySelector = document.getElementById('ministry-selector');
        if (ministrySelector) {
            ministrySelector.addEventListener('change', (e) => {
                this.loadMinistryAdminContent(e.target.value);
            });
        }
        
        // Image uploads
        this.setupImageUploads();
    }
    
    setupImageUploads() {
        const uploads = [
            { id: 'slide-image', type: 'slide-image' },
            { id: 'upi-qr-upload', type: 'upi-qr' },
            { id: 'update-image', type: 'update-image' },
            { id: 'youth-banner-upload', type: 'youth-banner', multiple: false },
            { id: 'youth-photos-upload', type: 'youth-gallery', multiple: true }
        ];
        
        uploads.forEach(upload => {
            const element = document.getElementById(upload.id);
            if (element) {
                element.addEventListener('change', (e) => {
                    if (upload.multiple) {
                        this.handleMultipleImageUpload(e, upload.type);
                    } else {
                        this.handleImageUpload(e, upload.type);
                    }
                });
            }
        });
    }
    
    setupCalendarControls() {
        const prevMonth = document.getElementById('prev-month');
        const nextMonth = document.getElementById('next-month');
        const youthPrevMonth = document.getElementById('youth-prev-month');
        const youthNextMonth = document.getElementById('youth-next-month');
        
        if (prevMonth) {
            prevMonth.addEventListener('click', () => {
                this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() - 1);
                this.renderCalendar();
            });
        }
        
        if (nextMonth) {
            nextMonth.addEventListener('click', () => {
                this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() + 1);
                this.renderCalendar();
            });
        }
        
        if (youthPrevMonth) {
            youthPrevMonth.addEventListener('click', () => {
                this.youthCalendarDate.setMonth(this.youthCalendarDate.getMonth() - 1);
                this.renderYouthCalendar();
            });
        }
        
        if (youthNextMonth) {
            youthNextMonth.addEventListener('click', () => {
                this.youthCalendarDate.setMonth(this.youthCalendarDate.getMonth() + 1);
                this.renderYouthCalendar();
            });
        }
    }
    
    setupMinistryTabs() {
        // Youth tabs
        document.querySelectorAll('.youth-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab('youth', tabId, btn);
            });
        });
        
        // Hospital tabs
        document.querySelectorAll('.hospital-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab('hospital', tabId, btn);
            });
        });
        
        // School tabs
        document.querySelectorAll('.school-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab('school', tabId, btn);
            });
        });
        
        // Women tabs
        document.querySelectorAll('.women-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab('women', tabId, btn);
            });
        });
        // Men tabs
        document.querySelectorAll('.men-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab('men', tabId, btn);
            });
        });
        // Theological College tabs
        document.querySelectorAll('.theological-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab('theological', tabId, btn);
            });
        });
         // Vocational Courses tabs
        document.querySelectorAll('.vocational-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                this.switchTab('vocational', tabId, btn);
            });
        });
    }
    
    setupStreamControls() {
        // Home stream controls
        document.querySelectorAll('.stream-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const source = btn.getAttribute('data-source');
                this.switchStreamSource(source, 'home');
                document.querySelectorAll('.stream-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Full stream controls
        document.querySelectorAll('.stream-btn-full').forEach(btn => {
            btn.addEventListener('click', () => {
                const source = btn.getAttribute('data-source');
                this.switchStreamSource(source, 'full');
                document.querySelectorAll('.stream-btn-full').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Stream quality
        const qualitySelect = document.getElementById('stream-quality-select');
        if (qualitySelect) {
            qualitySelect.addEventListener('change', (e) => {
                this.churchData.liveStream.quality = e.target.value;
                this.updateLiveStreamContent();
            });
        }
    }
    
    // ✅ CORRECTED: About section tabs setup
setupAboutTabs() {
    console.log('Setting up About tabs...');
    
    const aboutTabButtons = document.querySelectorAll('.about-tabs .tab-btn');
    console.log('Found about tab buttons:', aboutTabButtons.length);
    
    aboutTabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = btn.getAttribute('data-tab');
            console.log('About tab clicked:', tabId);
            this.switchAboutTab(tabId, btn);
        });
    });
}

//  CORRECTED: About tab switching function  
switchAboutTab(tabId, clickedButton) {
    console.log('Switching to about tab:', tabId);
    
    // Hide all about tab content
    document.querySelectorAll('.about-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show the target tab
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
        console.log('Showing tab:', tabId);
    }
    
    // Update button active states
    document.querySelectorAll('.about-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
    
    // Load dynamic content for specific tabs
    if (tabId === 'about-pastors') {
        this.renderAboutPastors();
    } else if (tabId === 'about-ec') {
        this.renderECMembers();  
    } else if (tabId === 'about-committees') {
        this.renderCommittees();
    }
}

// NEW FUNCTION - Render pastors specifically for About section
renderAboutPastors() {
    const aboutPastorsDisplay = document.getElementById('about-pastors-display');
    
    if (aboutPastorsDisplay) {
        console.log('Rendering pastors for About section...');
        
        // Sort pastors with primary pastor first
        const sortedPastors = this.churchData.pastors.sort((a, b) => {
            if (a.isPrimary && !b.isPrimary) return -1;
            if (!a.isPrimary && b.isPrimary) return 1;
            return 0;
        });
        
        aboutPastorsDisplay.innerHTML = sortedPastors.map(pastor => `
            <div class="pastor-card ${pastor.isPrimary ? 'main-pastor' : ''}">
                <div class="pastor-image">
                    ${pastor.photo ? 
                        `<img src="${pastor.photo}" alt="${pastor.name}">` : 
                        `<div class="image-placeholder">${pastor.title} Photo</div>`
                    }
                </div>
                <div class="pastor-info">
                    <h3>${pastor.name}</h3>
                    <span class="pastor-title">${pastor.title}</span>
                    <p>${pastor.description}</p>
                    <div class="pastor-contact">
                        <p><strong>Phone:</strong> ${pastor.phone}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log('About section pastors rendered successfully');
    }
}

// Render Executive Committee
renderECMembers() {
    const ecDisplay = document.getElementById('ec-members-display');
    if (!ecDisplay) return;
    
    ecDisplay.innerHTML = `
        <div class="ec-grid">
            ${this.churchData.executiveCommittee.map(member => `
                <div class="ec-member-card">
                    <div class="ec-member-name">${member.name}</div>
                    <div class="ec-member-position">${member.position}</div>
                    <div class="ec-member-contact">
                        
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Render Sub-Committees
renderCommittees() {
    const committeeSelector = document.getElementById('committee-selector');
    const committeeMembersDisplay = document.getElementById('committee-members-display');
    
    if (!committeeSelector) return;
    
    // Populate dropdown
    committeeSelector.innerHTML = `
        <option value="">-- Select Committee --</option>
        ${Object.keys(this.churchData.subCommittees).map(key => 
            `<option value="${key}">${this.churchData.subCommittees[key].name}</option>`
        ).join('')}
    `;
    
    // Handle selection
    committeeSelector.addEventListener('change', (e) => {
        const selected = e.target.value;
        if (selected) {
            const committee = this.churchData.subCommittees[selected];
            committeeMembersDisplay.innerHTML = `
                <h3>${committee.name}</h3>
                <div class="committee-members-grid">
                    ${committee.members.map(m => `
                        <div class="committee-member-card">
                            <div class="committee-member-name">${m.name}</div>
                            <div class="committee-member-role">${m.role}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    });
}


    // Navigation Methods
    showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Admin access control
        if (sectionId === 'admin-dashboard' && !this.isAdminLoggedIn) {
            this.showSection('home');
            return;
        }
        
        // Load admin content when dashboard is shown
        if (sectionId === 'admin-dashboard' && this.isAdminLoggedIn) {
            setTimeout(() => {
                this.populateAdminForms();
                this.renderSubAdmins();
                this.renderSlidesList();
                this.renderEventsList();
            }, 100);
        }
    }
    
    setActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    switchTab(ministry, tabId, button) {
        // Hide all tabs for this ministry
        document.querySelectorAll(`.${ministry}-tab`).forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show target tab
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add('active');
        }
        
        // Update button states
        button.parentNode.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    }
    
    // Content Rendering Methods
    renderAllContent() {
        this.renderHeroSlides();
        this.renderCalendar();
        this.renderLiveStream();
        this.renderMinistryContent();
        this.renderUpdates();
        this.renderContactInfo();
        this.renderOfferingsContent();
        this.renderServiceSchedule();
    }
    
    // NEW FUNCTION - Render pastors specifically for About section
renderAboutPastors() {
    const aboutPastorsDisplay = document.getElementById('about-pastors-display');
    
    if (aboutPastorsDisplay) {
        console.log('Rendering pastors for About section...');
        
        // Sort pastors with primary pastor first
        const sortedPastors = this.churchData.pastors.sort((a, b) => {
            if (a.isPrimary && !b.isPrimary) return -1;
            if (!a.isPrimary && b.isPrimary) return 1;
            return 0;
        });
        
        aboutPastorsDisplay.innerHTML = sortedPastors.map(pastor => `
            <div class="pastor-card ${pastor.isPrimary ? 'main-pastor' : ''}">
                <div class="pastor-image">
                    ${pastor.photo ? 
                        `<img src="${pastor.photo}" alt="${pastor.name}">` : 
                        `<div class="image-placeholder">${pastor.title} Photo</div>`
                    }
                </div>
                <div class="pastor-info">
                    <h3>${pastor.name}</h3>
                    <span class="pastor-title">${pastor.title}</span>
                    <p>${pastor.description}</p>
                    <div class="pastor-contact">
                        <p><strong>Phone:</strong> ${pastor.phone}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log(' About section pastors rendered successfully');
    }
}

    renderHeroSlides() {
    const slidesContainer = document.getElementById('hero-slides');
    if (slidesContainer) {
        if (this.churchData.heroSlides.length > 0) {
            slidesContainer.innerHTML = this.churchData.heroSlides.map(slide => {
                // Check if the slide has a video
                const isVideo = slide.image && (
                    slide.image.endsWith('.mp4') || 
                    slide.image.endsWith('.webm') || 
                    slide.image.endsWith('.ogg') ||
                    slide.image.toLowerCase().includes('mp4') ||
                    slide.image.toLowerCase().includes('video')
                );
                
                return `
                    <div class="swiper-slide">
                        <div class="hero-slide">
                            ${isVideo ? 
                                // Video background
                                `<video class="hero-video" autoplay muted loop playsinline>
                                    <source src="${slide.image}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>` :
                                // Image background
                                slide.image ? 
                                    `<div style="background-image: url('${slide.image}'); background-size: cover; background-position: center; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>` : 
                                    ''
                            }
                            <div class="hero-overlay"></div>
                            <div class="hero-content">
                                <h1>${slide.title || 'Welcome to Centenary Baptist Church'}</h1>
                                ${slide.description ? `<p>${slide.description}</p>` : ''}
                                <div class="hero-buttons">
                                    ${slide.link ? 
                                        `<a href="${slide.link}" class="btn btn-primary">Learn More</a>` :
                                        `<a href="#" data-section="about" class="btn btn-primary">Visit Us</a>`
                                    }
                                    <a href="#" data-section="live-stream" class="btn btn-secondary">Watch Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            
            // Reinitialize Swiper if needed
            if (this.heroSwiper) {
                this.heroSwiper.update();
            }
        }
    }
}

    
    renderPastors() {
        const pastorsDisplay = document.getElementById('pastors-display');
        if (pastorsDisplay) {
            // Sort pastors with primary pastor first
            const sortedPastors = this.churchData.pastors.sort((a, b) => {
                if (a.isPrimary && !b.isPrimary) return -1;
                if (!a.isPrimary && b.isPrimary) return 1;
                return 0;
            });
            
            pastorsDisplay.innerHTML = sortedPastors.map(pastor => `
                <div class="pastor-card ${pastor.isPrimary ? 'main-pastor' : ''}">
                    <div class="pastor-image">
                        ${pastor.photo ? 
                            `<img src="${pastor.photo}" alt="${pastor.name}">` : 
                            `<div class="image-placeholder">${pastor.title} Photo</div>`
                        }
                    </div>
                    <div class="pastor-info">
                        <h3>${pastor.name}</h3>
                        <span class="pastor-title">${pastor.title}</span>
                        <p>${pastor.description}</p>
                        <div class="pastor-contact">
                            <p><strong>Email:</strong> ${pastor.email}</p>
                            <p><strong>Phone:</strong> ${pastor.phone}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    initializeCalendar() {
        this.renderCalendar();
    }
    
    renderCalendar() {
        const currentMonthYear = document.getElementById('current-month-year');
        const calendarDisplay = document.getElementById('calendar-display');
        const upcomingEventsList = document.getElementById('upcoming-events-list');
        
        if (!currentMonthYear || !calendarDisplay) return;
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"];
        
        const year = this.currentCalendarDate.getFullYear();
        const month = this.currentCalendarDate.getMonth();
        
        currentMonthYear.textContent = `${monthNames[month]} ${year}`;
        
        // Generate calendar grid
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        const today = new Date();
        
        let calendarHTML = '';
        
        // Day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            calendarHTML += `<div class="day-header">${day}</div>`;
        });
        
        // Previous month's trailing days
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            calendarHTML += `<div class="calendar-day other-month">${day}</div>`;
        }
        
        // Current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const currentDate = new Date(year, month, day);
            const hasEvent = this.churchData.events.some(event => event.date === dateString);
            const isToday = currentDate.toDateString() === today.toDateString();
            
            let classNames = 'calendar-day';
            if (hasEvent) classNames += ' has-event';
            if (isToday) classNames += ' today';
            
            calendarHTML += `<div class="${classNames}">${day}</div>`;
        }
        
        // Next month's leading days
        const totalCells = calendarHTML.split('calendar-day').length - 1;
        const remainingCells = 42 - totalCells; // 6 rows Ã— 7 days
        for (let day = 1; day <= remainingCells && totalCells < 35; day++) {
            calendarHTML += `<div class="calendar-day other-month">${day}</div>`;
        }
        
        calendarDisplay.innerHTML = calendarHTML;
        
        // Render upcoming events
        if (upcomingEventsList) {
            const upcomingEvents = this.churchData.events
                .filter(event => new Date(event.date) >= today)
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .slice(0, 5);
            
            upcomingEventsList.innerHTML = upcomingEvents.map(event => `
                <div class="upcoming-event-item">
                    <div class="event-date-info">${this.formatDate(event.date)}</div>
                    <div class="event-title">${event.title}</div>
                    <div class="event-description">${event.description}</div>
                </div>
            `).join('');
        }
    }
    
    initializeYouthCalendar() {
        this.renderYouthCalendar();
    }
    
    renderYouthCalendar() {
        const youthCurrentMonth = document.getElementById('youth-current-month');
        const youthCalendarDisplay = document.getElementById('youth-calendar-display');
        
        if (!youthCurrentMonth || !youthCalendarDisplay) return;
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
                           "July", "August", "September", "October", "November", "December"];
        
        const year = this.youthCalendarDate.getFullYear();
        const month = this.youthCalendarDate.getMonth();
        
        youthCurrentMonth.textContent = `${monthNames[month]} ${year}`;
        
        // Generate youth calendar (simplified version)
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        
        let calendarHTML = '';
        
        // Day headers
        const dayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        dayHeaders.forEach(day => {
            calendarHTML += `<div class="day-header">${day}</div>`;
        });
        
        // Empty cells for days before first day of month
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += `<div class="calendar-day other-month"></div>`;
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const currentDate = new Date(year, month, day);
            const hasEvent = this.churchData.ministries.youth.calendar.events.some(event => event.date === dateString);
            const isToday = currentDate.toDateString() === today.toDateString();
            
            let classNames = 'calendar-day';
            if (hasEvent) classNames += ' has-event';
            if (isToday) classNames += ' today';
            
            calendarHTML += `<div class="${classNames}">${day}</div>`;
        }
        
        youthCalendarDisplay.innerHTML = calendarHTML;
    }
    
    initializeHeroSlider() {
        setTimeout(() => {
            this.heroSwiper = new Swiper('.hero-swiper', {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });
        }, 100);
    }
    
    renderLiveStream() {
        // Home stream
        const homeStreamPlayer = document.getElementById('home-stream-player');
        const homeStreamStatus = document.getElementById('home-stream-status');
        const nextServiceTime = document.getElementById('next-service-time');
        
        if (homeStreamStatus) {
            const statusIndicator = homeStreamStatus.querySelector('.status-indicator');
            const statusText = homeStreamStatus.querySelector('.status-text');
            
            if (this.churchData.liveStream.isLive) {
                statusIndicator.classList.remove('offline');
                statusIndicator.classList.add('live');
                statusText.textContent = 'Live Now';
            } else {
                statusIndicator.classList.remove('live');
                statusIndicator.classList.add('offline');
                statusText.textContent = 'Stream Offline';
            }
        }
        
        if (nextServiceTime) {
            nextServiceTime.textContent = this.churchData.liveStream.nextService;
        }
        
        this.updateStreamPlayer('home');
        
        // Full stream page
        const mainStreamPlayer = document.getElementById('main-stream-player');
        const streamStatusText = document.getElementById('stream-status-text');
        const nextServiceFull = document.getElementById('next-service-full');
        
        if (streamStatusText) {
            streamStatusText.textContent = this.churchData.liveStream.isLive ? 
                'Live stream is currently active' : 'Stream is currently offline';
        }
        
        if (nextServiceFull) {
            nextServiceFull.textContent = this.churchData.liveStream.nextService;
        }
        
        this.updateStreamPlayer('full');
    }
    
    updateStreamPlayer(type) {
        const playerId = type === 'home' ? 'home-stream-player' : 'main-stream-player';
        const player = document.getElementById(playerId);
        
        if (!player) return;
        
        if (this.churchData.liveStream.isLive) {
            const streamUrl = this.churchData.liveStream.source === 'youtube' ? 
                this.churchData.liveStream.youtubeStreamUrl : 
                this.churchData.liveStream.directStreamUrl;
            
            if (streamUrl) {
                player.innerHTML = `<iframe src="${streamUrl}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
            } else {
                player.innerHTML = `<div class="stream-placeholder${type === 'full' ? '-full' : ''}">
                    <div class="stream-info${type === 'full' ? '-full' : ''}">
                        <h3>Live Stream</h3>
                        <p>Stream URL not configured</p>
                    </div>
                </div>`;
            }
        } else {
            const placeholderClass = type === 'full' ? 'stream-placeholder-full' : 'stream-placeholder';
            const infoClass = type === 'full' ? 'stream-info-full' : 'stream-info';
            
            player.innerHTML = `<div class="${placeholderClass}">
                <div class="${infoClass}">
                    <h3>${type === 'full' ? 'Live Stream' : 'Next Service'}</h3>
                    <p>${type === 'full' ? 'Stream is currently offline' : this.churchData.liveStream.nextService}</p>
                    ${type === 'home' ? '<p>Live stream will begin 10 minutes before service</p>' : ''}
                </div>
            </div>`;
        }
    }
    
    switchStreamSource(source, type) {
        this.churchData.liveStream.source = source;
        this.updateStreamPlayer(type);
    }
    
    renderMinistryContent() {
        this.renderSundaySchool();
        this.renderYouthMinistry();
        this.renderRuralMinistry();
        this.renderReachMinistry();
        this.renderHospitalMinistry();
        this.renderSchoolMinistry();
        this.renderWomenMinistry();
        this.renderMenMinistry();
        this.renderTheologicalCollege();
        this.renderVocationalCourses();
    }
    
    renderSundaySchool() {
        const sundaySchoolBanner = document.getElementById('sunday-school-banner');
        const sundaySchoolGroups = document.getElementById('sunday-school-groups');
        
        if (sundaySchoolBanner) {
            if (this.churchData.ministries.sundaySchool.banner) {
                sundaySchoolBanner.innerHTML = `<img src="${this.churchData.ministries.sundaySchool.banner}" alt="Sunday School Banner">`;
            } else {
                sundaySchoolBanner.innerHTML = '<div class="banner-placeholder">Sunday School Events Banner</div>';
            }
        }
        
        if (sundaySchoolGroups) {
            sundaySchoolGroups.innerHTML = `
                <h3>Age Groups</h3>
                <div class="groups-grid">
                    ${this.churchData.ministries.sundaySchool.groups.map(group => `
                        <div class="group-card">
                            <h4>${group.name}</h4>
                            <p>${group.description}</p>
                            <span class="group-time">${group.time}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
    }
    
    renderYouthMinistry() {
        const youthBannerDisplay = document.getElementById('youth-banner-display');
        const youthProgramsDisplay = document.getElementById('youth-programs-display');
        const youthEventsDisplay = document.getElementById('youth-events-display');
        const youthGalleryDisplay = document.getElementById('youth-gallery-display');
        const youthTestimoniesDisplay = document.getElementById('youth-testimonies-display');
        
        if (youthBannerDisplay) {
            if (this.churchData.ministries.youth.banner) {
                youthBannerDisplay.innerHTML = `<img src="${this.churchData.ministries.youth.banner}" alt="Youth Banner">`;
            } else {
                youthBannerDisplay.innerHTML = '<div class="banner-placeholder">Youth Ministry Banner</div>';
            }
        }
        
        if (youthProgramsDisplay) {
            youthProgramsDisplay.innerHTML = this.churchData.ministries.youth.programs.map(program => `
                <div class="program-card">
                    <h4>${program.name}</h4>
                    <p><strong>Schedule:</strong> ${program.schedule}</p>
                    <p>${program.description}</p>
                    ${program.leader ? `<p><strong>Leader:</strong> ${program.leader}</p>` : ''}
                </div>
            `).join('');
        }
        
        if (youthEventsDisplay) {
            youthEventsDisplay.innerHTML = this.churchData.ministries.youth.events.map(event => `
                <div class="event-card">
                    <div class="event-date">${this.formatDate(event.date)}</div>
                    <h4>${event.name}</h4>
                    <p>${event.description}</p>
                </div>
            `).join('');
        }
        
        if (youthGalleryDisplay) {
            if (this.churchData.ministries.youth.gallery.length > 0) {
                youthGalleryDisplay.innerHTML = this.churchData.ministries.youth.gallery.map(photo => 
                    `<img src="${photo}" alt="Youth Activity Photo">`
                ).join('');
            } else {
                youthGalleryDisplay.innerHTML = '<div class="gallery-placeholder">No photos uploaded yet</div>';
            }
        }
        
        if (youthTestimoniesDisplay) {
            youthTestimoniesDisplay.innerHTML = this.churchData.ministries.youth.testimonies.map(testimony => `
                <div class="testimony-card">
                    <div class="testimony-quote">${testimony.quote}</div>
                    <div class="testimony-author">${testimony.name}</div>
                    <div class="testimony-role">${testimony.role}</div>
                </div>
            `).join('');
        }
    }
    
    renderRuralMinistry() {
        const ruralMissionText = document.getElementById('rural-mission-text');
        const ruralProgramsDisplay = document.getElementById('rural-programs-display');
        const ruralChurchesDisplay = document.getElementById('rural-churches-display');
        
        if (ruralMissionText) {
            ruralMissionText.textContent = this.churchData.ministries.rural.mission;
        }
        
        if (ruralProgramsDisplay) {
            ruralProgramsDisplay.innerHTML = this.churchData.ministries.rural.programs.map(program => `
                <div class="program-card">
                    <h4>${program.name}</h4>
                    <p>${program.description}</p>
                    ${program.locations ? `<p><strong>Locations:</strong> ${program.locations.join(', ')}</p>` : ''}
                    ${program.schedule ? `<p><strong>Schedule:</strong> ${program.schedule}</p>` : ''}
                </div>
            `).join('');
        }
        
        if (ruralChurchesDisplay) {
            ruralChurchesDisplay.innerHTML = this.churchData.ministries.rural.churches.map(church => `
                <div class="church-card">
                    <div class="church-image">
                        ${church.image ? 
                            `<img src="${church.image}" alt="${church.name}">` : 
                            `<div class="image-placeholder">Church Photo</div>`
                        }
                    </div>
                    <div class="church-info">
                        <h4>${church.name}</h4>
                        <div class="church-location">${church.location}</div>
                        <div class="church-pastor"><strong>Pastor:</strong> ${church.pastor}</div>
                        <p><strong>Established:</strong> ${church.established}</p>
                        <p><strong>Members:</strong> ${church.members}</p>
                    </div>
                </div>
            `).join('');
        }
    }
    
    renderReachMinistry() {
        const reachProgramsDisplay = document.getElementById('reach-programs-display');
        
        if (reachProgramsDisplay) {
            reachProgramsDisplay.innerHTML = this.churchData.ministries.reach.programs.map(program => `
                <div class="program-card">
                    <h4>${program.name}</h4>
                    <p>${program.description}</p>
                    <p><strong>Schedule:</strong> ${program.schedule}</p>
                </div>
            `).join('');
        }
    }
    
    renderHospitalMinistry() {
        const hospitalName = document.getElementById('hospital-name');
        const hospitalMissionText = document.getElementById('hospital-mission-text');
        const hospitalVisitingHours = document.getElementById('hospital-visiting-hours');
        const hospitalEmergency = document.getElementById('hospital-emergency');
        const hospitalPrayerTime = document.getElementById('hospital-prayer-time');
        const hospitalDoctorsDisplay = document.getElementById('hospital-doctors-display');
        const hospitalFacilitiesDisplay = document.getElementById('hospital-facilities-display');
        const hospitalLabsDisplay = document.getElementById('hospital-labs-display');
        const hospitalEventsDisplay = document.getElementById('hospital-events-display');
        
        if (hospitalName) hospitalName.textContent = this.churchData.ministries.hospital.name;
        if (hospitalMissionText) hospitalMissionText.textContent = this.churchData.ministries.hospital.mission;
        if (hospitalVisitingHours) hospitalVisitingHours.textContent = this.churchData.ministries.hospital.visitingHours;
        if (hospitalEmergency) hospitalEmergency.textContent = this.churchData.ministries.hospital.emergency;
        if (hospitalPrayerTime) hospitalPrayerTime.textContent = this.churchData.ministries.hospital.prayerTime;
        
        if (hospitalDoctorsDisplay) {
            hospitalDoctorsDisplay.innerHTML = this.churchData.ministries.hospital.doctors.map(doctor => `
                <div class="doctor-card">
                    <h4>${doctor.name}</h4>
                    <div class="doctor-specialization">${doctor.specialization}</div>
                    <div class="doctor-experience">${doctor.experience}</div>
                    <div class="doctor-contact">
                        <span>Timings: ${doctor.timings}</span>
                        <span>Phone: ${doctor.phone}</span>
                    </div>
                </div>
            `).join('');
        }
        
        if (hospitalFacilitiesDisplay) {
            hospitalFacilitiesDisplay.innerHTML = this.churchData.ministries.hospital.facilities.map(facility => `
                <div class="facility-card">
                    <h4>${facility.name}</h4>
                    <div class="facility-description">${facility.description}</div>
                </div>
            `).join('');
        }
        
        if (hospitalLabsDisplay) {
            hospitalLabsDisplay.innerHTML = this.churchData.ministries.hospital.labs.map(lab => `
                <div class="lab-card">
                    <h4>${lab.name}</h4>
                    <div class="lab-description">${lab.description}</div>
                    <p><strong>Timings:</strong> ${lab.timings}</p>
                </div>
            `).join('');
        }
        
        if (hospitalEventsDisplay) {
            hospitalEventsDisplay.innerHTML = this.churchData.ministries.hospital.events.map(event => `
                <div class="event-card">
                    <div class="event-date">${this.formatDate(event.date)}</div>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            `).join('');
        }
    }
    
    renderSchoolMinistry() {
        const schoolAboutContent = document.getElementById('school-about-content');
        const schoolStaffDisplay = document.getElementById('school-staff-display');
        const schoolEventsDisplay = document.getElementById('school-events-display');
        
        if (schoolAboutContent) {
            schoolAboutContent.innerHTML = `
                <p>${this.churchData.ministries.school.about}</p>
                <div class="school-programs">
                    <h4>Academic Programs</h4>
                    <div class="programs-grid">
                        ${this.churchData.ministries.school.programs.map(program => `
                            <div class="program-card">
                                <h5>${program.name}</h5>
                                <p>${program.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        if (schoolStaffDisplay) {
            schoolStaffDisplay.innerHTML = `
                <div class="programs-grid">
                    ${this.churchData.ministries.school.staff.map(staff => `
                        <div class="program-card">
                            <h4>${staff.name}</h4>
                            <div class="doctor-specialization">${staff.position}</div>
                            <p><strong>Qualification:</strong> ${staff.qualification}</p>
                            <p><strong>Experience:</strong> ${staff.experience}</p>
                            <p><strong>Email:</strong> ${staff.email}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (schoolEventsDisplay) {
            schoolEventsDisplay.innerHTML = this.churchData.ministries.school.events.map(event => `
                <div class="event-card">
                    <div class="event-date">${this.formatDate(event.date)}</div>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            `).join('');
        }
    }
    
    renderWomenMinistry() {
        const womenBibleStudyDisplay = document.getElementById('women-bible-study-display');
        const womenPrayerDisplay = document.getElementById('women-prayer-display');
        const womenRetreatsDisplay = document.getElementById('women-retreats-display');
        const womenEventsDisplay = document.getElementById('women-events-display');
        
        if (womenBibleStudyDisplay) {
            womenBibleStudyDisplay.innerHTML = `
                <div class="programs-grid">
                    ${this.churchData.ministries.women.bibleStudy.map(study => `
                        <div class="program-card">
                            <h4>${study.name}</h4>
                            <p><strong>Time:</strong> ${study.time}</p>
                            <p>${study.description}</p>
                            <p><strong>Leader:</strong> ${study.leader}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (womenPrayerDisplay) {
            womenPrayerDisplay.innerHTML = `
                <div class="programs-grid">
                    ${this.churchData.ministries.women.prayerGroups.map(group => `
                        <div class="program-card">
                            <h4>${group.name}</h4>
                            <p><strong>Time:</strong> ${group.time}</p>
                            <p>${group.description}</p>
                            <p><strong>Focus:</strong> ${group.focus}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (womenRetreatsDisplay) {
            womenRetreatsDisplay.innerHTML = `
                <div class="programs-grid">
                    ${this.churchData.ministries.women.retreats.map(retreat => `
                        <div class="program-card">
                            <h4>${retreat.name}</h4>
                            <p><strong>Date:</strong> ${this.formatDate(retreat.date)}</p>
                            <p><strong>Location:</strong> ${retreat.location}</p>
                            <p><strong>Theme:</strong> ${retreat.theme}</p>
                            <p>${retreat.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (womenEventsDisplay) {
            womenEventsDisplay.innerHTML = this.churchData.ministries.women.events.map(event => `
                <div class="event-card">
                    <div class="event-date">${this.formatDate(event.date)}</div>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            `).join('');
        }
    }

    renderMenMinistry() {
        const menBibleStudyDisplay = document.getElementById('men-bible-study-display');
        const menPrayerDisplay = document.getElementById('men-prayer-display');
        const menRetreatsDisplay = document.getElementById('men-retreats-display');
        const menEventsDisplay = document.getElementById('men-events-display');
        
        if (menBibleStudyDisplay) {
            menBibleStudyDisplay.innerHTML = `
                <div class="programs-grid">
                    ${this.churchData.ministries.men.bibleStudy.map(study => `
                        <div class="program-card">
                            <h4>${study.name}</h4>
                            <p><strong>Time:</strong> ${study.time}</p>
                            <p>${study.description}</p>
                            <p><strong>Leader:</strong> ${study.leader}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (menPrayerDisplay) {
            menPrayerDisplay.innerHTML = `
                <div class="programs-grid">
                    ${this.churchData.ministries.men.prayerGroups.map(group => `
                        <div class="program-card">
                            <h4>${group.name}</h4>
                            <p><strong>Time:</strong> ${group.time}</p>
                            <p>${group.description}</p>
                            <p><strong>Focus:</strong> ${group.focus}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (menRetreatsDisplay) {
            menRetreatsDisplay.innerHTML = `
                <div class="programs-grid">
                    ${this.churchData.ministries.men.retreats.map(retreat => `
                        <div class="program-card">
                            <h4>${retreat.name}</h4>
                            <p><strong>Date:</strong> ${this.formatDate(retreat.date)}</p>
                            <p><strong>Location:</strong> ${retreat.location}</p>
                            <p><strong>Theme:</strong> ${retreat.theme}</p>
                            <p>${retreat.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        if (menEventsDisplay) {
            menEventsDisplay.innerHTML = this.churchData.ministries.men.events.map(event => `
                <div class="event-card">
                    <div class="event-date">${this.formatDate(event.date)}</div>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            `).join('');
        }
    }
    
    renderTheologicalCollege() {
    const theologicalBanner = document.getElementById('theological-college-banner');
    const theologicalAboutContent = document.getElementById('theological-about-content');
    const theologicalProgramsDisplay = document.getElementById('theological-programs-display');
    const theologicalFacultyDisplay = document.getElementById('theological-faculty-display');
    const theologicalEventsDisplay = document.getElementById('theological-events-display');
    const theologicalGalleryDisplay = document.getElementById('theological-gallery-display');
    
    if (theologicalBanner) {
        if (this.churchData.ministries.theologicalCollege.banner) {
            theologicalBanner.innerHTML = `<img src="${this.churchData.ministries.theologicalCollege.banner}" alt="Theological College Banner">`;
        } else {
            theologicalBanner.innerHTML = `<div class="banner-placeholder">Theological College Banner</div>`;
        }
    }
    
    if (theologicalAboutContent) {
        theologicalAboutContent.innerHTML = `<p>${this.churchData.ministries.theologicalCollege.about}</p>`;
    }
    
    if (theologicalProgramsDisplay) {
        theologicalProgramsDisplay.innerHTML = this.churchData.ministries.theologicalCollege.programs.map(program => `
            <div class="program-card">
                <h4>${program.name}</h4>
                <p><strong>Duration:</strong> ${program.duration}</p>
                <p>${program.description}</p>
                <p><strong>Fees:</strong> ${program.fees}</p>
            </div>
        `).join('');
    }
    
    if (theologicalFacultyDisplay) {
        theologicalFacultyDisplay.innerHTML = this.churchData.ministries.theologicalCollege.faculty.map(faculty => `
            <div class="faculty-card">
                <h4>${faculty.name}</h4>
                <div class="faculty-qualification">${faculty.qualification}</div>
                <p><strong>Experience:</strong> ${faculty.experience}</p>
                <p><strong>Specialization:</strong> ${faculty.specialization}</p>
                <p><strong>Email:</strong> ${faculty.email}</p>
            </div>
        `).join('');
    }
    
    if (theologicalEventsDisplay) {
        theologicalEventsDisplay.innerHTML = this.churchData.ministries.theologicalCollege.events.map(event => `
            <div class="event-card">
                <div class="event-date">${this.formatDate(event.date)}</div>
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        `).join('');
    }
    
    if (theologicalGalleryDisplay) {
        if (this.churchData.ministries.theologicalCollege.gallery.length > 0) {
            theologicalGalleryDisplay.innerHTML = this.churchData.ministries.theologicalCollege.gallery.map(photo => 
                `<img src="${photo}" alt="Theological College Photo">`
            ).join('');
        } else {
            theologicalGalleryDisplay.innerHTML = `<div class="gallery-placeholder">No photos uploaded yet</div>`;
        }
    }
}

renderVocationalCourses() {
    const vocationalBanner = document.getElementById('vocational-banner');
    const vocationalAboutContent = document.getElementById('vocational-about-content');
    const vocationalCoursesDisplay = document.getElementById('vocational-courses-display');
    const vocationalInstructorsDisplay = document.getElementById('vocational-instructors-display');
    const vocationalEventsDisplay = document.getElementById('vocational-events-display');
    const vocationalGalleryDisplay = document.getElementById('vocational-gallery-display');
    
    if (vocationalBanner) {
        if (this.churchData.ministries.vocationalCourses.banner) {
            vocationalBanner.innerHTML = `<img src="${this.churchData.ministries.vocationalCourses.banner}" alt="Vocational Training Banner">`;
        } else {
            vocationalBanner.innerHTML = `<div class="banner-placeholder">Vocational Training Banner</div>`;
        }
    }
    
    if (vocationalAboutContent) {
        vocationalAboutContent.innerHTML = `<p>${this.churchData.ministries.vocationalCourses.about}</p>`;
    }
    
    if (vocationalCoursesDisplay) {
        vocationalCoursesDisplay.innerHTML = this.churchData.ministries.vocationalCourses.courses.map(course => `
            <div class="course-card">
                <h4>${course.name}</h4>
                <p><strong>Duration:</strong> ${course.duration} | <strong>Fees:</strong> ${course.fees}</p>
                <p>${course.description}</p>
            </div>
        `).join('');
    }
    
    if (vocationalInstructorsDisplay) {
        vocationalInstructorsDisplay.innerHTML = this.churchData.ministries.vocationalCourses.instructors.map(instructor => `
            <div class="instructor-card">
                <h4>${instructor.name}</h4>
                <div class="instructor-specialization">${instructor.specialization}</div>
                <p><strong>Experience:</strong> ${instructor.experience}</p>
                <p><strong>Qualification:</strong> ${instructor.qualification}</p>
            </div>
        `).join('');
    }
    
    if (vocationalEventsDisplay) {
        vocationalEventsDisplay.innerHTML = this.churchData.ministries.vocationalCourses.events.map(event => `
            <div class="event-card">
                <div class="event-date">${this.formatDate(event.date)}</div>
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        `).join('');
    }
    
    if (vocationalGalleryDisplay) {
        if (this.churchData.ministries.vocationalCourses.gallery.length > 0) {
            vocationalGalleryDisplay.innerHTML = this.churchData.ministries.vocationalCourses.gallery.map(photo => 
                `<img src="${photo}" alt="Vocational Training Photo">`
            ).join('');
        } else {
            vocationalGalleryDisplay.innerHTML = `<div class="gallery-placeholder">No photos uploaded yet</div>`;
        }
    }
}

    renderServiceSchedule() {
        const serviceScheduleDisplay = document.getElementById('service-schedule-display');
        
        if (serviceScheduleDisplay) {
            serviceScheduleDisplay.innerHTML = this.churchData.serviceTimes.map(service => `
                <div class="service-item">
                    <strong>${service.day} ${service.time}</strong>
                    <div>${service.service}</div>
                    <small>${service.description}</small>
                </div>
            `).join('');
        }
    }
    
    renderUpdates() {
        const updatesDisplay = document.getElementById('updates-display');
        
        if (updatesDisplay) {
            updatesDisplay.innerHTML = this.churchData.updates.map(update => `
                <div class="update-card">
                    <div class="update-header">
                        <h3>${update.title}</h3>
                        <span class="update-date">${this.formatDate(update.date)}</span>
                    </div>
                    <p>${update.content}</p>
                    ${update.image ? `<img src="${update.image}" alt="Update Image" class="update-image">` : ''}
                </div>
            `).join('');
        }
    }
    
    renderContactInfo() {
        const contactDetails = document.getElementById('contact-details');
        
        if (contactDetails) {
            contactDetails.innerHTML = `
                <p><strong>Address:</strong><br>${this.churchData.contact.address}</p>
                <p><strong>Phone:</strong> ${this.churchData.contact.phone}</p>
                <p><strong>Email:</strong> ${this.churchData.contact.email}</p>
            `;
        }
    }
    
    renderOfferingsContent() {
        const givingMessageText = document.getElementById('giving-message-text');
        const upiQrDisplay = document.getElementById('upi-qr-display');
        const bankDetailsDisplay = document.getElementById('bank-details-display');
        
        if (givingMessageText) {
            givingMessageText.textContent = this.churchData.offerings.message;
        }
        
        if (upiQrDisplay) {
            if (this.churchData.offerings.upiQRCode) {
                upiQrDisplay.innerHTML = `<img src="${this.churchData.offerings.upiQRCode}" alt="UPI QR Code" class="qr-code">`;
            } else {
                upiQrDisplay.innerHTML = '<div class="qr-placeholder">UPI QR Code</div>';
            }
        }
        
        if (bankDetailsDisplay) {
            const bank = this.churchData.offerings.bankDetails;
            bankDetailsDisplay.innerHTML = `
                <p><strong>Account Name:</strong> ${bank.accountName}</p>
                <p><strong>Account Number:</strong> ${bank.accountNumber}</p>
                <p><strong>IFSC Code:</strong> ${bank.ifscCode}</p>
                <p><strong>Bank Name:</strong> ${bank.bankName}</p>
            `;
        }
    }
    
    updateFooterContent() {
        const footerContact = document.getElementById('footer-contact');
        const footerServiceTimes = document.getElementById('footer-service-times');
        
        if (footerContact) {
            footerContact.innerHTML = `
                <p>${this.churchData.contact.address}</p>
                <p>Phone: ${this.churchData.contact.phone}</p>
                <p>Email: ${this.churchData.contact.email}</p>
            `;
        }
        
        if (footerServiceTimes) {
            const displayServices = this.churchData.serviceTimes.slice(0, 4);
            footerServiceTimes.innerHTML = displayServices.map(service => 
                `<p>${service.day} ${service.service} ${service.time}</p>`
            ).join('');
        }
    }
    
    // Admin Authentication Methods
    showLoginModal() {
        const modal = document.getElementById('admin-login-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }
    
    hideLoginModal() {
        const modal = document.getElementById('admin-login-modal');
        const errorDiv = document.getElementById('login-error');
        const loginForm = document.getElementById('admin-login-form');
        
        if (modal) modal.classList.add('hidden');
        if (errorDiv) errorDiv.classList.add('hidden');
        if (loginForm) loginForm.reset();
    }
    
    handleLogin() {
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
        const errorDiv = document.getElementById('login-error');
        
        // Check super admin
        if (username === 'admin' && password === 'church2025') {
            this.currentUser = {
                username: 'admin',
                fullName: 'Super Administrator',
                role: 'super-admin',
                permissions: ['all']
            };
            this.isAdminLoggedIn = true;
            this.currentUserRole = 'super-admin';
            this.userPermissions = ['all'];
            
            this.hideLoginModal();
            this.updateAdminUI();
            this.showSection('admin-dashboard');
            this.showMessage('Welcome, Super Administrator!', 'success');
            return;
        }
        
        // Check sub-admins
        const subAdmin = this.subAdmins.find(admin => 
            admin.username === username && admin.password === password
        );
        
        if (subAdmin) {
            this.currentUser = {
                username: subAdmin.username,
                fullName: subAdmin.fullName,
                role: 'sub-admin',
                permissions: subAdmin.permissions
            };
            this.isAdminLoggedIn = true;
            this.currentUserRole = 'sub-admin';
            this.userPermissions = subAdmin.permissions;
            
            this.hideLoginModal();
            this.updateAdminUI();
            this.showSection('admin-dashboard');
            this.showMessage(`Welcome, ${subAdmin.fullName}!`, 'success');
            return;
        }
        
        // Invalid credentials
        if (errorDiv) {
            errorDiv.classList.remove('hidden');
        }
    }
    
    logout() {
        this.currentUser = null;
        this.isAdminLoggedIn = false;
        this.currentUserRole = 'visitor';
        this.userPermissions = [];
        this.updateAdminUI();
        this.showSection('home');
        this.showMessage('Logged out successfully!', 'success');
    }
    
    updateAdminUI() {
        const adminLoginBtn = document.getElementById('admin-login-btn');
        const adminDashboardBtn = document.getElementById('admin-dashboard-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const adminUsernameDisplay = document.getElementById('admin-username-display');
        const adminRoleDisplay = document.getElementById('admin-role-display');
        const superAdminControls = document.getElementById('super-admin-controls');
        
        if (this.isAdminLoggedIn) {
            if (adminLoginBtn) adminLoginBtn.classList.add('hidden');
            if (adminDashboardBtn) adminDashboardBtn.classList.remove('hidden');
            if (logoutBtn) logoutBtn.classList.remove('hidden');
            
            if (adminUsernameDisplay && this.currentUser) {
                adminUsernameDisplay.textContent = this.currentUser.fullName;
            }
            
            if (adminRoleDisplay && this.currentUser) {
                adminRoleDisplay.textContent = this.currentUser.role === 'super-admin' ? 'Super Admin' : 'Sub Admin';
            }
            
            // Show/hide super admin controls
            if (superAdminControls) {
                if (this.currentUserRole === 'super-admin') {
                    superAdminControls.style.display = 'block';
                } else {
                    superAdminControls.style.display = 'none';
                }
            }
            
            // Update tab visibility based on permissions
            this.updateTabPermissions();
        } else {
            if (adminLoginBtn) adminLoginBtn.classList.remove('hidden');
            if (adminDashboardBtn) adminDashboardBtn.classList.add('hidden');
            if (logoutBtn) logoutBtn.classList.add('hidden');
            
            if (superAdminControls) {
                superAdminControls.style.display = 'none';
            }
        }
    }
    
    updateTabPermissions() {
        const tabs = document.querySelectorAll('.admin-tabs .tab-btn');
        
        tabs.forEach(tab => {
            const tabId = tab.getAttribute('data-tab');
            const permission = this.getPermissionForTab(tabId);
            
            if (this.currentUserRole === 'super-admin' || this.userPermissions.includes(permission)) {
                tab.style.display = 'block';
            } else {
                tab.style.display = 'none';
            }
        });
    }
    
    getPermissionForTab(tabId) {
        const permissionMap = {
            'home-admin': 'home',
            'pastors-admin': 'pastors',
            'calendar-admin': 'calendar',
            'stream-admin': 'stream',
            'ministries-admin': 'ministries',
            'updates-admin': 'updates',
            'offerings-admin': 'offerings',
            'contact-admin': 'contact',
            'donations-admin': 'offerings'
        };
        
        return permissionMap[tabId] || tabId;
    }
    
    // Sub-Admin Management Methods
    showSubAdminModal(subAdmin = null) {
        const modal = document.getElementById('sub-admin-modal');
        const modalTitle = document.getElementById('sub-admin-modal-title');
        const form = document.getElementById('sub-admin-form');
        
        if (modal && modalTitle && form) {
            if (subAdmin) {
                modalTitle.textContent = 'Edit Sub-Admin';
                this.populateSubAdminForm(subAdmin);
            } else {
                modalTitle.textContent = 'Add Sub-Admin';
                form.reset();
            }
            
            modal.classList.remove('hidden');
        }
    }
    
    hideSubAdminModal() {
        const modal = document.getElementById('sub-admin-modal');
        const form = document.getElementById('sub-admin-form');
        
        if (modal) modal.classList.add('hidden');
        if (form) form.reset();
    }
    
    populateSubAdminForm(subAdmin) {
        document.getElementById('sub-admin-username').value = subAdmin.username;
        document.getElementById('sub-admin-password').value = subAdmin.password;
        document.getElementById('sub-admin-fullname').value = subAdmin.fullName;
        document.getElementById('sub-admin-email').value = subAdmin.email;
        
        // Set permissions checkboxes
        const checkboxes = document.querySelectorAll('input[name="permissions"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = subAdmin.permissions.includes(checkbox.value);
        });
    }
    
    handleSubAdminSubmission() {
        const form = document.getElementById('sub-admin-form');
        const formData = new FormData(form);
        
        const subAdminData = {
            id: Date.now(),
            username: formData.get('sub-admin-username') || document.getElementById('sub-admin-username').value,
            password: formData.get('sub-admin-password') || document.getElementById('sub-admin-password').value,
            fullName: formData.get('sub-admin-fullname') || document.getElementById('sub-admin-fullname').value,
            email: formData.get('sub-admin-email') || document.getElementById('sub-admin-email').value,
            role: 'sub-admin',
            permissions: Array.from(document.querySelectorAll('input[name="permissions"]:checked')).map(cb => cb.value),
            createdDate: new Date().toISOString().split('T')[0]
        };
        
        // Check if username already exists
        const existingAdmin = this.subAdmins.find(admin => admin.username === subAdminData.username);
        if (existingAdmin) {
            this.showMessage('Username already exists!', 'error');
            return;
        }
        
        this.subAdmins.push(subAdminData);
        this.renderSubAdmins();
        this.hideSubAdminModal();
        this.showMessage('Sub-admin created successfully!', 'success');
    }
    
    renderSubAdmins() {
        const subAdminsDisplay = document.getElementById('sub-admins-display');
        
        if (subAdminsDisplay) {
            subAdminsDisplay.innerHTML = this.subAdmins.map(admin => `
                <div class="sub-admin-card">
                    <div class="sub-admin-header">
                        <div class="sub-admin-name">${admin.fullName}</div>
                        <div class="sub-admin-actions">
                            <button class="btn btn-small btn-secondary" onclick="window.enhancedChurch.editSubAdmin(${admin.id})">Edit</button>
                            <button class="btn btn-small btn-outline" onclick="window.enhancedChurch.deleteSubAdmin(${admin.id})">Delete</button>
                        </div>
                    </div>
                    <div class="sub-admin-email">${admin.email}</div>
                    <div class="permissions-list">
                        ${admin.permissions.map(permission => `
                            <span class="permission-tag">${permission}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }
    
    editSubAdmin(id) {
        const subAdmin = this.subAdmins.find(admin => admin.id === id);
        if (subAdmin) {
            this.showSubAdminModal(subAdmin);
        }
    }
    
    deleteSubAdmin(id) {
        if (confirm('Are you sure you want to delete this sub-admin?')) {
            this.subAdmins = this.subAdmins.filter(admin => admin.id !== id);
            this.renderSubAdmins();
            this.showMessage('Sub-admin deleted successfully!', 'success');
        }
    }
    
    switchAdminTab(tabId) {
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add('active');
        }
        
        // Load specific content for certain tabs
        if (tabId === 'ministries-admin') {
            this.loadMinistryAdminContent('youth');
        }
    }
    
    populateAdminForms() {
        // Stream form
        const streamSource = document.getElementById('admin-stream-source');
        const streamUrl = document.getElementById('admin-stream-url');
        const streamStatus = document.getElementById('admin-stream-status');
        const nextService = document.getElementById('admin-next-service');
        
        if (streamSource) streamSource.value = this.churchData.liveStream.source;
        if (streamUrl) {
            const url = this.churchData.liveStream.source === 'youtube' ? 
                this.churchData.liveStream.youtubeStreamUrl : 
                this.churchData.liveStream.directStreamUrl;
            streamUrl.value = url;
        }
        if (streamStatus) streamStatus.value = this.churchData.liveStream.isLive ? 'live' : 'offline';
        if (nextService) nextService.value = this.churchData.liveStream.nextService;
        
        // Contact form
        const address = document.getElementById('admin-address');
        const phone = document.getElementById('admin-phone');
        const email = document.getElementById('admin-email');
        
        if (address) address.value = this.churchData.contact.address;
        if (phone) phone.value = this.churchData.contact.phone;
        if (email) email.value = this.churchData.contact.email;
        
        // Offerings form
        const givingMessage = document.getElementById('admin-giving-message');
        const accountName = document.getElementById('admin-account-name');
        const accountNumber = document.getElementById('admin-account-number');
        const ifsc = document.getElementById('admin-ifsc');
        const bankName = document.getElementById('admin-bank-name');
        
        if (givingMessage) givingMessage.value = this.churchData.offerings.message;
        if (accountName) accountName.value = this.churchData.offerings.bankDetails.accountName;
        if (accountNumber) accountNumber.value = this.churchData.offerings.bankDetails.accountNumber;
        if (ifsc) ifsc.value = this.churchData.offerings.bankDetails.ifscCode;
        if (bankName) bankName.value = this.churchData.offerings.bankDetails.bankName;
        
        // Update donations table
        this.updateDonationsTable();
    }
    
    // Admin Form Handlers
    handleAdminFormSubmission(formId) {
        switch (formId) {
            case 'slider-form':
                this.addHeroSlide();
                break;
            case 'event-form':
                this.addEvent();
                break;
            case 'stream-form':
                this.updateStreamSettings();
                break;
            case 'update-form':
                this.addUpdate();
                break;
            case 'offerings-form':
                this.updateOfferingsSettings();
                break;
            case 'contact-admin-form':
                this.updateContactSettings();
                break;
        }
    }
    
    addHeroSlide() {
        const title = document.getElementById('slide-title');
        const description = document.getElementById('slide-description');
        const link = document.getElementById('slide-link');
        
        if (title && description && title.value && description.value) {
            const newSlide = {
                id: Date.now(),
                title: title.value,
                description: description.value,
                image: this.tempImages['slide-image'] || "",
                link: link ? link.value : ""
            };
            
            this.churchData.heroSlides.push(newSlide);
            this.renderHeroSlides();
            this.renderSlidesList();
            
            // Reset form
            title.value = '';
            description.value = '';
            if (link) link.value = '';
            delete this.tempImages['slide-image'];
            
            this.showMessage('Slide added successfully!', 'success');
        }
    }
    
    renderSlidesList() {
        const slidesList = document.getElementById('slides-list');
        
        if (slidesList) {
            slidesList.innerHTML = this.churchData.heroSlides.map(slide => `
                <div class="slide-item">
                    ${slide.image ? `<img src="${slide.image}" alt="Slide" class="slide-image">` : ''}
                    <div class="slide-content">
                        <h5>${slide.title}</h5>
                        <p>${slide.description}</p>
                        <div class="slide-actions">
                            <button class="btn btn-small btn-secondary" onclick="window.enhancedChurch.editSlide(${slide.id})">Edit</button>
                            <button class="btn btn-small btn-outline" onclick="window.enhancedChurch.deleteSlide(${slide.id})">Delete</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    deleteSlide(id) {
        if (confirm('Are you sure you want to delete this slide?')) {
            this.churchData.heroSlides = this.churchData.heroSlides.filter(slide => slide.id !== id);
            this.renderHeroSlides();
            this.renderSlidesList();
            this.showMessage('Slide deleted successfully!', 'success');
        }
    }
    
    
    
    addEvent() {
        const title = document.getElementById('event-title');
        const date = document.getElementById('event-date');
        const time = document.getElementById('event-time');
        const description = document.getElementById('event-description');
        const ministry = document.getElementById('event-ministry');
        
        if (title && date && title.value && date.value) {
            const newEvent = {
                id: Date.now(),
                title: title.value,
                date: date.value,
                time: time ? time.value : '',
                description: description ? description.value : '',
                ministry: ministry ? ministry.value : 'general'
            };
            
            this.churchData.events.push(newEvent);
            this.renderCalendar();
            this.renderEventsList();
            
            // Reset form
            title.value = '';
            date.value = '';
            if (time) time.value = '';
            if (description) description.value = '';
            if (ministry) ministry.value = 'general';
            
            this.showMessage('Event added successfully!', 'success');
        }
    }
    
    renderEventsList() {
        const eventsList = document.getElementById('admin-events-list');
        
        if (eventsList) {
            const upcomingEvents = this.churchData.events
                .filter(event => new Date(event.date) >= new Date())
                .sort((a, b) => new Date(a.date) - new Date(b.date));
            
            eventsList.innerHTML = upcomingEvents.map(event => `
                <div class="admin-event-item">
                    <div class="event-info">
                        <h5>${event.title}</h5>
                        <div class="event-meta">
                            ${this.formatDate(event.date)} ${event.time ? `at ${event.time}` : ''} | ${event.ministry}
                        </div>
                    </div>
                    <div class="event-actions">
                        <button class="btn btn-small btn-secondary" onclick="window.enhancedChurch.editEvent(${event.id})">Edit</button>
                        <button class="btn btn-small btn-outline" onclick="window.enhancedChurch.deleteEvent(${event.id})">Delete</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    deleteEvent(id) {
        if (confirm('Are you sure you want to delete this event?')) {
            this.churchData.events = this.churchData.events.filter(event => event.id !== id);
            this.renderCalendar();
            this.renderEventsList();
            this.showMessage('Event deleted successfully!', 'success');
        }
    }
    
    updateStreamSettings() {
        const source = document.getElementById('admin-stream-source');
        const url = document.getElementById('admin-stream-url');
        const status = document.getElementById('admin-stream-status');
        const nextService = document.getElementById('admin-next-service');
        
        if (source) this.churchData.liveStream.source = source.value;
        if (status) this.churchData.liveStream.isLive = status.value === 'live';
        if (nextService) this.churchData.liveStream.nextService = nextService.value;
        
        if (url && source) {
            if (source.value === 'youtube') {
                this.churchData.liveStream.youtubeStreamUrl = url.value;
            } else {
                this.churchData.liveStream.directStreamUrl = url.value;
            }
        }
        
        this.renderLiveStream();
        this.showMessage('Stream settings updated successfully!', 'success');
    }
    
    addUpdate() {
        const title = document.getElementById('update-title');
        const content = document.getElementById('update-content');
        
        if (title && content && title.value && content.value) {
            const newUpdate = {
                id: Date.now(),
                title: title.value,
                date: new Date().toISOString().split('T')[0],
                content: content.value,
                image: this.tempImages['update-image'] || ""
            };
            
            this.churchData.updates.unshift(newUpdate);
            this.renderUpdates();
            
            // Reset form
            title.value = '';
            content.value = '';
            delete this.tempImages['update-image'];
            
            this.showMessage('Update added successfully!', 'success');
        }
    }
    
    updateOfferingsSettings() {
        const message = document.getElementById('admin-giving-message');
        const accountName = document.getElementById('admin-account-name');
        const accountNumber = document.getElementById('admin-account-number');
        const ifsc = document.getElementById('admin-ifsc');
        const bankName = document.getElementById('admin-bank-name');
        
        if (message) this.churchData.offerings.message = message.value;
        if (accountName) this.churchData.offerings.bankDetails.accountName = accountName.value;
        if (accountNumber) this.churchData.offerings.bankDetails.accountNumber = accountNumber.value;
        if (ifsc) this.churchData.offerings.bankDetails.ifscCode = ifsc.value;
        if (bankName) this.churchData.offerings.bankDetails.bankName = bankName.value;
        
        this.renderOfferingsContent();
        this.showMessage('Offerings settings updated successfully!', 'success');
    }
    
    updateContactSettings() {
        const address = document.getElementById('admin-address');
        const phone = document.getElementById('admin-phone');
        const email = document.getElementById('admin-email');
        
        if (address) this.churchData.contact.address = address.value;
        if (phone) this.churchData.contact.phone = phone.value;
        if (email) this.churchData.contact.email = email.value;
        
        this.renderContactInfo();
        this.updateFooterContent();
        this.showMessage('Contact information updated successfully!', 'success');
    }
    
    loadMinistryAdminContent(ministry) {
    const ministryAdminContent = document.getElementById('ministry-admin-content');
    if (ministryAdminContent) {
        switch(ministry) {
            case 'theological-college':
                ministryAdminContent.innerHTML = `
                    <div class="admin-form">
                        <h3>Theological College Management</h3>
                        
                        <div class="admin-subsection">
                            <h4>About Section</h4>
                            <textarea id="theological-about-editor" rows="4">${this.churchData.ministries.theologicalCollege.about}</textarea>
                            <button class="btn btn-primary" onclick="window.enhancedChurch.updateTheologicalAbout()">Update About</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Add New Program</h4>
                            <div class="form-row">
                                <input type="text" id="theological-program-name" placeholder="Program Name">
                                <input type="text" id="theological-program-duration" placeholder="Duration">
                            </div>
                            <textarea id="theological-program-description" placeholder="Program Description" rows="3"></textarea>
                            <input type="text" id="theological-program-fees" placeholder="Fees">
                            <button class="btn btn-primary" onclick="window.enhancedChurch.addTheologicalProgram()">Add Program</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Add Faculty Member</h4>
                            <div class="form-row">
                                <input type="text" id="theological-faculty-name" placeholder="Faculty Name">
                                <input type="text" id="theological-faculty-qualification" placeholder="Qualification">
                            </div>
                            <div class="form-row">
                                <input type="text" id="theological-faculty-experience" placeholder="Experience">
                                <input type="text" id="theological-faculty-specialization" placeholder="Specialization">
                            </div>
                            <input type="email" id="theological-faculty-email" placeholder="Email">
                            <button class="btn btn-primary" onclick="window.enhancedChurch.addTheologicalFaculty()">Add Faculty</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Banner Management</h4>
                            <input type="file" id="theological-banner-upload" accept="image/*" onchange="window.enhancedChurch.handleTheologicalBannerUpload(event)">
                            <button class="btn btn-secondary" onclick="window.enhancedChurch.removeTheologicalBanner()">Remove Banner</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Gallery Management</h4>
                            <input type="file" id="theological-photos-upload" accept="image/*" multiple onchange="window.enhancedChurch.handleTheologicalPhotosUpload(event)">
                            <div id="theological-photos-list" class="photos-list">
                                ${this.churchData.ministries.theologicalCollege.gallery.map((photo, index) => `
                                    <div class="photo-item">
                                        <img src="${photo}" alt="Gallery Photo">
                                        <button class="btn btn-small btn-outline" onclick="window.enhancedChurch.removeTheologicalPhoto(${index})">Remove</button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'vocational-courses':
                ministryAdminContent.innerHTML = `
                    <div class="admin-form">
                        <h3>Vocational Courses Management</h3>
                        
                        <div class="admin-subsection">
                            <h4>About Section</h4>
                            <textarea id="vocational-about-editor" rows="4">${this.churchData.ministries.vocationalCourses.about}</textarea>
                            <button class="btn btn-primary" onclick="window.enhancedChurch.updateVocationalAbout()">Update About</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Add New Course</h4>
                            <div class="form-row">
                                <input type="text" id="vocational-course-name" placeholder="Course Name">
                                <input type="text" id="vocational-course-duration" placeholder="Duration">
                            </div>
                            <input type="text" id="vocational-course-fees" placeholder="Fees">
                            <textarea id="vocational-course-description" placeholder="Course Description" rows="3"></textarea>
                            <button class="btn btn-primary" onclick="window.enhancedChurch.addVocationalCourse()">Add Course</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Add Instructor</h4>
                            <div class="form-row">
                                <input type="text" id="vocational-instructor-name" placeholder="Instructor Name">
                                <input type="text" id="vocational-instructor-specialization" placeholder="Specialization">
                            </div>
                            <div class="form-row">
                                <input type="text" id="vocational-instructor-experience" placeholder="Experience">
                                <input type="text" id="vocational-instructor-qualification" placeholder="Qualification">
                            </div>
                            <button class="btn btn-primary" onclick="window.enhancedChurch.addVocationalInstructor()">Add Instructor</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Banner Management</h4>
                            <input type="file" id="vocational-banner-upload" accept="image/*" onchange="window.enhancedChurch.handleVocationalBannerUpload(event)">
                            <button class="btn btn-secondary" onclick="window.enhancedChurch.removeVocationalBanner()">Remove Banner</button>
                        </div>
                        
                        <div class="admin-subsection">
                            <h4>Gallery Management</h4>
                            <input type="file" id="vocational-photos-upload" accept="image/*" multiple onchange="window.enhancedChurch.handleVocationalPhotosUpload(event)">
                            <div id="vocational-photos-list" class="photos-list">
                                ${this.churchData.ministries.vocationalCourses.gallery.map((photo, index) => `
                                    <div class="photo-item">
                                        <img src="${photo}" alt="Gallery Photo">
                                        <button class="btn btn-small btn-outline" onclick="window.enhancedChurch.removeVocationalPhoto(${index})">Remove</button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            default:
                ministryAdminContent.innerHTML = `
                    <div class="admin-form">
                        <h3>${ministry.charAt(0).toUpperCase() + ministry.slice(1)} Ministry Management</h3>
                        <p>Ministry-specific admin controls will be loaded here.</p>
                    </div>
                `;
        }
    }
}

    
    // Image Upload Methods
    handleImageUpload(event, type) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.tempImages[type] = e.target.result;
                this.showMessage('Image uploaded successfully!', 'success');
            };
            reader.readAsDataURL(file);
        }
    }
    
    handleMultipleImageUpload(event, type) {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            files.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (type === 'youth-gallery') {
                        this.churchData.ministries.youth.gallery.push(e.target.result);
                        this.renderYouthMinistry();
                    }
                };
                reader.readAsDataURL(file);
            });
            this.showMessage('Photos uploaded successfully!', 'success');
        }
    }
    
    // Form Handlers
    handleContactSubmission() {
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;
        
        // In a real application, this would send the message to a server
        this.showMessage(`Thank you ${name}! Your message has been received. We'll get back to you soon.`, 'success');
        
        // Reset form
        document.getElementById('contact-form').reset();
    }
    
    handleDonationSubmission() {
        const donation = {
            date: new Date().toISOString().split('T')[0],
            name: document.getElementById('donor-name').value,
            fatherName: document.getElementById('father-name').value,
            phone: document.getElementById('donor-phone').value,
            email: document.getElementById('donor-email').value,
            amount: document.getElementById('donation-amount').value,
            purpose: document.getElementById('donation-purpose').value,
            message: document.getElementById('prayer-request').value
        };
        
        this.churchData.offerings.donations.push(donation);
        
        // Reset form
        document.getElementById('donation-form').reset();
        
        this.showMessage(`Dear ${donation.name}, thank you for your generous donation to ${donation.purpose}. Your contribution helps us serve God and our community. We will keep you and your prayer request in our prayers. God bless you!`, 'success');
    }
    
    updateDonationsTable() {
        const tbody = document.getElementById('donations-table-body');
        if (tbody) {
            tbody.innerHTML = this.churchData.offerings.donations.map(donation => `
                <tr>
                    <td>${this.formatDate(donation.date)}</td>
                    <td>${donation.name}</td>
                    <td>${donation.fatherName}</td>
                    <td>${donation.phone}</td>
                    <td>${donation.amount || 'N/A'}</td>
                    <td>${donation.purpose}</td>
                    <td>
                        <button class="btn btn-small btn-outline" onclick="window.enhancedChurch.deleteDonation('${donation.date}_${donation.name}')">Delete</button>
                    </td>
                </tr>
            `).join('');
        }
    }
    
    deleteDonation(identifier) {
        if (confirm('Are you sure you want to delete this donation record?')) {
            const [date, name] = identifier.split('_');
            this.churchData.offerings.donations = this.churchData.offerings.donations.filter(
                donation => !(donation.date === date && donation.name === name)
            );
            this.updateDonationsTable();
            this.showMessage('Donation record deleted successfully!', 'success');
        }
    }
    
    // Utility Methods
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 20px;
            border-radius: 8px;
            color: white;
            z-index: 10000;
            max-width: 400px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            ${type === 'success' ? 'background: #48bb78;' : ''}
            ${type === 'error' ? 'background: #f56565;' : ''}
            ${type === 'info' ? 'background: #4299e1;' : ''}
        `;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                messageDiv.style.opacity = '0';
                messageDiv.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    if (document.body.contains(messageDiv)) {
                        document.body.removeChild(messageDiv);
                    }
                }, 300);
            }
        }, 5000);
    }
    // Theological College Admin Functions
updateTheologicalAbout() {
    const content = document.getElementById('theological-about-editor').value;
    this.churchData.ministries.theologicalCollege.about = content;
    this.renderTheologicalCollege();
    this.showMessage('About section updated successfully!', 'success');
}

addTheologicalProgram() {
    const name = document.getElementById('theological-program-name').value;
    const duration = document.getElementById('theological-program-duration').value;
    const description = document.getElementById('theological-program-description').value;
    const fees = document.getElementById('theological-program-fees').value;
    
    if (name && duration && description) {
        this.churchData.ministries.theologicalCollege.programs.push({
            name, duration, description, fees: fees || 'Contact office for details'
        });
        
        // Clear form
        document.getElementById('theological-program-name').value = '';
        document.getElementById('theological-program-duration').value = '';
        document.getElementById('theological-program-description').value = '';
        document.getElementById('theological-program-fees').value = '';
        
        this.renderTheologicalCollege();
        this.showMessage('Program added successfully!', 'success');
    }
}

addTheologicalFaculty() {
    const name = document.getElementById('theological-faculty-name').value;
    const qualification = document.getElementById('theological-faculty-qualification').value;
    const experience = document.getElementById('theological-faculty-experience').value;
    const specialization = document.getElementById('theological-faculty-specialization').value;
    const email = document.getElementById('theological-faculty-email').value;
    
    if (name && qualification && experience && specialization) {
        this.churchData.ministries.theologicalCollege.faculty.push({
            id: Date.now(), name, qualification, experience, specialization, email
        });
        
        // Clear form
        document.getElementById('theological-faculty-name').value = '';
        document.getElementById('theological-faculty-qualification').value = '';
        document.getElementById('theological-faculty-experience').value = '';
        document.getElementById('theological-faculty-specialization').value = '';
        document.getElementById('theological-faculty-email').value = '';
        
        this.renderTheologicalCollege();
        this.showMessage('Faculty member added successfully!', 'success');
    }
}

handleTheologicalBannerUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.churchData.ministries.theologicalCollege.banner = e.target.result;
            this.renderTheologicalCollege();
            this.showMessage('Banner updated successfully!', 'success');
        };
        reader.readAsDataURL(file);
    }
}

handleTheologicalPhotosUpload(event) {
    const files = Array.from(event.target.files);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.churchData.ministries.theologicalCollege.gallery.push(e.target.result);
            this.renderTheologicalCollege();
            this.loadMinistryAdminContent('theological-college');
        };
        reader.readAsDataURL(file);
    });
    this.showMessage('Photos uploaded successfully!', 'success');
}

removeTheologicalPhoto(index) {
    if (confirm('Remove this photo?')) {
        this.churchData.ministries.theologicalCollege.gallery.splice(index, 1);
        this.renderTheologicalCollege();
        this.loadMinistryAdminContent('theological-college');
    }
}

// Vocational Courses Admin Functions
updateVocationalAbout() {
    const content = document.getElementById('vocational-about-editor').value;
    this.churchData.ministries.vocationalCourses.about = content;
    this.renderVocationalCourses();
    this.showMessage('About section updated successfully!', 'success');
}

addVocationalCourse() {
    const name = document.getElementById('vocational-course-name').value;
    const duration = document.getElementById('vocational-course-duration').value;
    const fees = document.getElementById('vocational-course-fees').value;
    const description = document.getElementById('vocational-course-description').value;
    
    if (name && duration && fees && description) {
        this.churchData.ministries.vocationalCourses.courses.push({
            name, duration, fees, description
        });
        
        // Clear form
        document.getElementById('vocational-course-name').value = '';
        document.getElementById('vocational-course-duration').value = '';
        document.getElementById('vocational-course-fees').value = '';
        document.getElementById('vocational-course-description').value = '';
        
        this.renderVocationalCourses();
        this.showMessage('Course added successfully!', 'success');
    }
}

addVocationalInstructor() {
    const name = document.getElementById('vocational-instructor-name').value;
    const specialization = document.getElementById('vocational-instructor-specialization').value;
    const experience = document.getElementById('vocational-instructor-experience').value;
    const qualification = document.getElementById('vocational-instructor-qualification').value;
    
    if (name && specialization && experience && qualification) {
        this.churchData.ministries.vocationalCourses.instructors.push({
            id: Date.now(), name, specialization, experience, qualification
        });
        
        // Clear form
        document.getElementById('vocational-instructor-name').value = '';
        document.getElementById('vocational-instructor-specialization').value = '';
        document.getElementById('vocational-instructor-experience').value = '';
        document.getElementById('vocational-instructor-qualification').value = '';
        
        this.renderVocationalCourses();
        this.showMessage('Instructor added successfully!', 'success');
    }
}

handleVocationalBannerUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.churchData.ministries.vocationalCourses.banner = e.target.result;
            this.renderVocationalCourses();
            this.showMessage('Banner updated successfully!', 'success');
        };
        reader.readAsDataURL(file);
    }
}

handleVocationalPhotosUpload(event) {
    const files = Array.from(event.target.files);
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.churchData.ministries.vocationalCourses.gallery.push(e.target.result);
            this.renderVocationalCourses();
            this.loadMinistryAdminContent('vocational-courses');
        };
        reader.readAsDataURL(file);
    });
    this.showMessage('Photos uploaded successfully!', 'success');
}

removeVocationalPhoto(index) {
    if (confirm('Remove this photo?')) {
        this.churchData.ministries.vocationalCourses.gallery.splice(index, 1);
        this.renderVocationalCourses();
        this.loadMinistryAdminContent('vocational-courses');
    }
}

}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.enhancedChurch = new EnhancedChurchWebsite();
});

// ✅ EMERGENCY FIX - Force setup after page loads
window.addEventListener('load', () => {
    console.log('Page loaded - setting up About tabs...');
    
    const aboutTabButtons = document.querySelectorAll('.about-tabs .tab-btn');
    console.log('Found buttons:', aboutTabButtons.length);
    
    aboutTabButtons.forEach((btn, index) => {
        console.log('Setting up button', index, btn.textContent);
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Button clicked:', btn.textContent);
            
            const tabId = btn.getAttribute('data-tab');
            console.log('Target tab:', tabId);
            
            // Hide all tabs
            document.querySelectorAll('.about-tab').forEach(tab => {
                tab.classList.remove('active');
                console.log('Hiding:', tab.id);
            });
            
            // Show target tab
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
                console.log('Showing:', tabId);
            } else {
                console.error('Tab not found:', tabId);
            }
            
            // Update button states
            document.querySelectorAll('.about-tabs .tab-btn').forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
        });
    });
});
