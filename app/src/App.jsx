import { useState, useRef } from 'react';
import { Mail, Plus, Lock, User, MapPin, GraduationCap, Users, BookOpen, Menu, X, LogOut, Globe, Grid, HelpCircle, FileText, Search, ChevronRight, ChevronLeft, Briefcase, Star, AlertCircle, Building2, CheckSquare, Award, IdCard, UploadCloud, MessageSquare, Video, PlayCircle, Bell, Heart, ThumbsUp, Send, ShieldAlert, MessageCircle, Navigation, Clock, ShieldCheck, CreditCard, Activity, Server, CheckCircle2, School, PlaySquare } from 'lucide-react';

// ==========================================
// 1. TRANSLATION DICTIONARY
// ==========================================
const translations = {
  'UK English': {
    signUp: 'Sign Up', logIn: 'Log In', iam: 'I am a...', student: 'Student', guardian: 'Parent', tutor: 'Teacher', admin: 'Admin', superAdmin: 'Super Admin',
    name: 'Full Name', mobile: 'Mobile Number', address: 'Full Address', email: 'Email Address', password: 'Password',
    createBtn: 'Create Account', loginBtn: 'Log In', processing: 'Processing...', or: 'OR', google: 'Continue with Google',
    menu: 'Menu', language: 'Language', support: 'Support', terms: 'Terms & Conditions', logout: 'Log Out',
    welcome: 'Welcome to your Dashboard!', portal: 'Portal', findTutor: 'Find a Teacher', search: 'Search',
    step1: 'Level', step2: 'Group', step3: 'Subject', searchAlert: 'Searching for best teachers...',
    msgStudent: 'Find the perfect teacher for your future.', msgGuardian: 'Secure the best education for your child.', msgTutor: 'Start teaching and earning securely.', msgAdmin: 'Manage users and verifications.', msgSuperAdmin: 'Full system & server control.',
    subtitle: 'Secure your child future.', topTutors: 'Top Rated Teachers', bookNow: 'Book Now', reviews: 'reviews', aboutMe: 'About Me', experience: 'Experience', education: 'Education', hourlyRate: 'Asking Price', expertise: 'Expertise',
    mandatoryProfileMsg: 'You must complete your profile (min 80%) to access features.', createProfileTitle: 'Complete Profile', certName: 'Name (As per Certs)',
    varsityMail: 'University Email', personalMail: 'Personal Email', age: 'Age', gender: 'Gender', university: 'University',
    achievements: 'Achievements', termsAgree: 'I agree to Terms', saveProfile: 'Save Profile', identityVerification: 'Identity Verification', idType: 'ID Type', studentId: 'Student ID', nidCard: 'National ID', 
    uploadFront: 'Upload Front', uploadBack: 'Upload Back', scanInstruction: 'Please upload clear photos.', prevTuitions: 'Previous Tuitions',
    updateProfile: 'Update Profile', messages: 'Messages', teachingSubjects: 'Teaching Subjects', addSubject: 'Add Subject', demoClass: 'Video Tutorial', uploadVideo: 'Upload Video', videoInstruction: 'Upload a 20-min class on a specific topic.',
    demoFeed: 'Explore Video Tutorials', watchNow: 'Watch & Rate', comments: 'Comments', writeComment: 'Write a comment...', post: 'Post',
    notifications: 'Notifications', noNotifs: 'No new notifications.', newCommentNotif: 'New comment on your video.',
    contentBlockedAlert: 'SECURITY ALERT: Contact info sharing is blocked.', reply: 'Reply', upNext: 'Up Next',
    dashboardPage: 'Dashboard', allDemoClasses: 'All Tutorials',
    premiumRequired: 'Premium Membership Required', messagesLockedDesc: 'Upgrade to unlock direct messaging.', upgradeNow: 'Upgrade', typeMessage: 'Type a message...',
    profileUpdatedAlert: 'Profile updated!', keepProfileUpdated: 'Keep your profile updated.', allTutors: 'All Teachers', findTutorDesc: 'Search our expert educators.',
    supportTitle: 'Support System', supportDesc: 'We are here 24/7.', contactAdmin: 'Message Admin', subjectLabel: 'Subject', messageLabel: 'Message', sendMsgBtn: 'Send', contactInfo: 'Contact Info', followUs: 'Follow Us', reportTeacher: 'Report Teacher',
    findNearby: 'Find Nearby Teachers', detectingLoc: 'Detecting Location...', kmAway: 'km away',
    bookMe: 'Request Tuition', moreDetails: 'More Details', currentUniversity: 'Current University', achievementsLife: 'Achievements & Awards', messageTutor: 'Message Teacher',
    myBookings: 'My Tuitions', pending: 'Pending', accepted: 'Active', totalEarnings: 'Total Earnings', activeStudents: 'Active Students', reqActions: 'Actions', accept: 'Accept', decline: 'Decline', currentBookings: 'Current Tuitions', suggestedTutors: 'Suggested Teachers',
    profileIncomplete: 'Profile incomplete.', availableSlots: 'Available Slots', selectSlot: 'Select Time', confirmBooking: 'Confirm Request', institution: 'Institution Name', guardianName: 'Guardian Name', guardianPhone: 'Guardian Phone', profileProgress: 'Profile Completion',
    fathersName: "Father's Name", mothersName: "Mother's Name", birthYear: "Year of Birth", nidNumber: "National ID", parentsProfession: "Parents Profession", childInfo: "Child's Info", profession: "Profession", profilePic: "Profile Picture", uploadCv: "Upload CV", askingPrice: "Asking Price/Mo", uniRankLink: "Uni Rank Link", approvePayment: "Pay Now", verifyUsers: "Verify Users", adminDashboard: "Admin Overview", pendingVerifications: "Pending KYC", adminId: "Admin ID", otpSentMsg: "OTP sent!", locRequired: "Location access mandatory.", verifyOtpBtn: "Verify OTP", adminUsers: "User Management", adminPayments: "Transactions", adminReports: "Reports", sysSettings: "System Settings", serverMgmt: "Server Management", cancelReq: "Cancel"
  },
  'Bangla (বাংলা)': {
    signUp: 'নিবন্ধন', logIn: 'লগ ইন', iam: 'আমি একজন...', student: 'শিক্ষার্থী', guardian: 'অভিভাবক', tutor: 'শিক্ষক', admin: 'অ্যাডমিন', superAdmin: 'সুপার অ্যাডমিন',
    name: 'পুরো নাম', mobile: 'মোবাইল নম্বর', address: 'পূর্ণ ঠিকানা', email: 'ইমেইল', password: 'পাসওয়ার্ড',
    createBtn: 'অ্যাকাউন্ট তৈরি করুন', loginBtn: 'লগ ইন করুন', processing: 'প্রক্রিয়াধীন...', or: 'অথবা', google: 'Google এর সাথে লগিন',
    menu: 'মেনু', language: 'ভাষা', support: 'সাপোর্ট', terms: 'শর্তাবলী', logout: 'লগ আউট',
    welcome: 'ড্যাশবোর্ডে স্বাগতম!', portal: 'পোর্টাল', findTutor: 'শিক্ষক খুঁজুন', search: 'খুঁজুন',
    step1: 'স্তর', step2: 'গ্রুপ', step3: 'বিষয়', searchAlert: 'শিক্ষক খোঁজা হচ্ছে...',
    msgStudent: 'আপনার ভবিষ্যতের জন্য সেরা শিক্ষক।', msgGuardian: 'সন্তানের জন্য সেরা শিক্ষক নিশ্চিত করুন।', msgTutor: 'নিরাপদে পড়ানো শুরু করুন।', msgAdmin: 'সিস্টেম অ্যাডমিনিস্ট্রেশন।', msgSuperAdmin: 'সম্পূর্ণ সিস্টেম কন্ট্রোল।',
    subtitle: 'আপনার সন্তানের ভবিষ্যৎ সুরক্ষিত করুন।', topTutors: 'শীর্ষ শিক্ষক', bookNow: 'বুক করুন', reviews: 'রিভিউ', aboutMe: 'আমার সম্পর্কে', experience: 'অভিজ্ঞতা', education: 'শিক্ষাগত যোগ্যতা', hourlyRate: 'পারিশ্রমিক', expertise: 'দক্ষতা',
    mandatoryProfileMsg: 'ফিচার ব্যবহার করতে প্রোফাইল সম্পূর্ণ করুন।', createProfileTitle: 'প্রোফাইল সম্পূর্ণ করুন', certName: 'নাম (সনদ অনুযায়ী)',
    varsityMail: 'বিশ্ববিদ্যালয় ইমেইল', personalMail: 'ব্যক্তিগত ইমেইল', age: 'বয়স', gender: 'লিঙ্গ', university: 'বিশ্ববিদ্যালয়',
    achievements: 'অর্জন', termsAgree: 'শর্তাবলীতে সম্মত', saveProfile: 'সংরক্ষণ করুন', identityVerification: 'পরিচয় যাচাইকরণ', idType: 'ডকুমেন্ট', studentId: 'স্টুডেন্ট আইডি', nidCard: 'এনআইডি', 
    uploadFront: 'সামনের দিক', uploadBack: 'পেছনের দিক', scanInstruction: 'পরিষ্কার ছবি আপলোড করুন।', prevTuitions: 'পূর্ববর্তী টিউশন',
    updateProfile: 'প্রোফাইল আপডেট', messages: 'মেসেজ', teachingSubjects: 'পড়ানোর বিষয়', addSubject: 'বিষয় যোগ', demoClass: 'ভিডিও টিউটোরিয়াল', uploadVideo: 'ভিডিও আপলোড', videoInstruction: 'একটি পরিষ্কার ক্লাস আপলোড করুন।',
    demoFeed: 'ভিডিও টিউটোরিয়াল এক্সপ্লোর করুন', watchNow: 'দেখুন ও রেট দিন', comments: 'মন্তব্য', writeComment: 'মন্তব্য লিখুন...', post: 'পোস্ট',
    notifications: 'নোটিফিকেশন', noNotifs: 'কোনো নোটিফিকেশন নেই।', newCommentNotif: 'নতুন মন্তব্য।',
    contentBlockedAlert: 'সতর্কতা: কন্টাক্ট শেয়ার করা নিষেধ।', reply: 'রিপ্লাই', upNext: 'পরবর্তী',
    dashboardPage: 'ড্যাশবোর্ড', allDemoClasses: 'সকল টিউটোরিয়াল',
    premiumRequired: 'প্রিমিয়াম প্রয়োজন', messagesLockedDesc: 'মেসেজ পড়তে আপগ্রেড করুন।', upgradeNow: 'আপগ্রেড', typeMessage: 'মেসেজ লিখুন...',
    profileUpdatedAlert: 'প্রোফাইল আপডেট হয়েছে!', keepProfileUpdated: 'প্রোফাইল আপডেট রাখুন।', allTutors: 'সকল শিক্ষক', findTutorDesc: 'বিশেষজ্ঞ শিক্ষকদের খুঁজুন।',
    supportTitle: 'সাপোর্ট', supportDesc: 'আমরা ২৪/৭ আপনার সাথে আছি।', contactAdmin: 'মেসেজ দিন', subjectLabel: 'বিষয়', messageLabel: 'মেসেজ', sendMsgBtn: 'পাঠান', contactInfo: 'যোগাযোগ', followUs: 'ফলো করুন', reportTeacher: 'শিক্ষকের বিরুদ্ধে রিপোর্ট',
    findNearby: 'নিকটবর্তী শিক্ষক খুঁজুন', detectingLoc: 'লোকেশন শনাক্ত হচ্ছে...', kmAway: 'কিমি দূরে',
    bookMe: 'টিউশন রিকোয়েস্ট', moreDetails: 'বিস্তারিত', currentUniversity: 'বর্তমান বিশ্ববিদ্যালয়', achievementsLife: 'পুরস্কার', messageTutor: 'মেসেজ দিন',
    myBookings: 'আমার টিউশন', pending: 'অপেক্ষমান', accepted: 'সক্রিয়', totalEarnings: 'মোট আয়', activeStudents: 'সক্রিয় শিক্ষার্থী', reqActions: 'পদক্ষেপ', accept: 'গ্রহণ', decline: 'বাতিল', currentBookings: 'বর্তমান টিউশন', suggestedTutors: 'প্রস্তাবিত শিক্ষক',
    profileIncomplete: 'প্রোফাইল অসম্পূর্ণ।', availableSlots: 'পছন্দের সময়সূচী', selectSlot: 'সময় নির্বাচন', confirmBooking: 'নিশ্চিত করুন', institution: 'প্রতিষ্ঠানের নাম', guardianName: 'অভিভাবকের নাম', guardianPhone: 'অভিভাবকের ফোন', profileProgress: 'প্রোফাইল সম্পন্ন',
    fathersName: "পিতার নাম", mothersName: "মাতার নাম", birthYear: "জন্ম সাল", nidNumber: "এনআইডি নম্বর", parentsProfession: "পিতা-মাতার পেশা", childInfo: "সন্তানের তথ্য", profession: "পেশা", profilePic: "প্রোফাইল ছবি", uploadCv: "সিভি আপলোড", askingPrice: "পারিশ্রমিক/মাস", uniRankLink: "বিশ্ববিদ্যালয়ের র‍্যাঙ্ক", approvePayment: "পেমেন্ট করুন", verifyUsers: "ইউজার যাচাই", adminDashboard: "অ্যাডমিন ড্যাশবোর্ড", pendingVerifications: "অপেক্ষমান যাচাইকরণ", adminId: "অ্যাডমিন আইডি", otpSentMsg: "OTP পাঠানো হয়েছে!", locRequired: "লোকেশন বাধ্যতামূলক।", verifyOtpBtn: "OTP যাচাই", adminUsers: "ব্যবহারকারী পরিচালনা", adminPayments: "লেনদেনসমূহ", adminReports: "রিপোর্ট", sysSettings: "সিস্টেম সেটিংস", serverMgmt: "সার্ভার পরিচালনা", cancelReq: "বাতিল"
  }
};

const supportedLanguages = ['UK English', 'Bangla (বাংলা)', 'Hindi (हिन्दी)', 'Urdu (اردো)', 'Tamil (தமிழ்)'];

// ==========================================
// 2. PROGRAMMATIC MOCK DATA GENERATION
// ==========================================
const curriculumData = {
  'Class 1-5 (Child)': { 'All Subjects': ['Bangla', 'English', 'Math', 'Science', 'Social Studies', 'Religion'] },
  'Class 6-8 (Medium)': { 'All Subjects': ['Bangla', 'English', 'Math', 'Science', 'ICT', 'BGS'] },
  SSC: { Science: ['Physics', 'Chemistry', 'Higher Math', 'Biology', 'Bangla', 'English'], Arts: ['History', 'Geography', 'Economics', 'Bangla', 'English'], Commerce: ['Accounting', 'Finance', 'Bangla', 'English'] },
  HSC: { Science: ['Physics', 'Chemistry', 'Higher Math', 'Biology', 'Bangla', 'English'], Arts: ['Logic', 'Islamic History', 'Sociology', 'Bangla', 'English'], Commerce: ['Accounting', 'Business Org', 'Finance', 'Bangla', 'English'] }
};

const firstNames = ['Rafiqul', 'Nusrat', 'Tanvir', 'Ayesha', 'Sami', 'Fahim', 'Karim', 'Laila', 'Zubair', 'Hana', 'Rahim', 'Salma', 'Imran', 'Tania', 'Arif', 'Mariya', 'Nasir', 'Rina', 'Habib', 'Farzana'];
const lastNames = ['Islam', 'Jahan', 'Ahmed', 'Siddiqua', 'Rahman', 'Hossain', 'Ali', 'Begum', 'Khan', 'Chowdhury', 'Akter', 'Uddin'];
const unis = ['Dhaka University (DU)', 'Jahangirnagar University (JU)', 'IBA, DU', 'BUET', 'Rajshahi University', 'NSU', 'BRAC University'];
const areas = ['Mirpur', 'Banani', 'Uttara', 'Dhanmondi', 'Gulshan', 'Mohammadpur', 'Badda', 'Khilgaon'];

const generateName = () => `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;

// Generate 1000 Tutors
const mockTutors = Array.from({ length: 1000 }, (_, i) => {
  const levels = Object.keys(curriculumData);
  const level = levels[Math.floor(Math.random() * levels.length)];
  const groups = Object.keys(curriculumData[level]);
  const group = groups[Math.floor(Math.random() * groups.length)];
  const subjectsForGroup = curriculumData[level][group];
  const s1 = subjectsForGroup[Math.floor(Math.random() * subjectsForGroup.length)];
  const s2 = subjectsForGroup[Math.floor(Math.random() * subjectsForGroup.length)];
  const gender = Math.random() > 0.4 ? 'Male' : 'Female';
  
  return {
    id: i + 1,
    name: generateName(),
    gender,
    rating: (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    subjects: Array.from(new Set([s1, s2])),
    subjectData: [
      { level, group, subject: s1 },
      { level, group, subject: s2 }
    ],
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher${i}&gender=${gender.toLowerCase() === 'male' ? 'male' : 'female'}&backgroundColor=b6e3f4`,
    bio: 'Dedicated educator with a passion for helping students succeed...',
    experience: `${Math.floor(Math.random() * 10) + 1} Years`,
    education: `BSc in ${s1}, ${unis[Math.floor(Math.random() * unis.length)]}`,
    rate: `৳${(Math.floor(Math.random() * 5) + 3) * 1000}/mo`,
    demoVideoId: `v${i + 1}`,
    distance: (Math.random() * 10).toFixed(1),
    locationName: `${areas[Math.floor(Math.random() * areas.length)]}, Dhaka`,
    university: unis[Math.floor(Math.random() * unis.length)],
    achievements: 'Top rated educator on the platform.',
    slots: ['Sat-Mon-Wed 10:00 AM', 'Sun-Tue-Thu 04:00 PM'],
    isVerified: Math.random() > 0.3
  };
});

const initialVideos = mockTutors.slice(0, 1000).map((tutor, i) => ({
  id: `v${i + 1}`,
  tutorId: tutor.id,
  tutorName: tutor.name,
  subject: tutor.subjects[0],
  level: tutor.subjectData[0].level,
  title: `Mastering ${tutor.subjects[0]} - Session ${i + 1}`,
  thumbnail: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400&h=250`,
  rating: tutor.rating,
  reactionsLove: Math.floor(Math.random() * 50),
  reactionsGood: Math.floor(Math.random() * 100),
  reactionsNotGood: Math.floor(Math.random() * 10),
  comments: []
}));

const mockAdminUsers = Array.from({ length: 30 }, (_, i) => ({
  id: 1000 + i + 1,
  name: generateName(),
  role: 'Teacher',
  nid: `199${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 1000000000)}`,
  status: 'Pending Verification',
  documents: 'NID, CV, Certs'
}));

const mockAllUsers = Array.from({ length: 1000 }, (_, i) => ({
  id: 2000 + i + 1,
  name: generateName(),
  role: i % 3 === 0 ? 'Parent' : 'Student',
  joinDate: `2026-0${Math.floor(Math.random() * 4) + 1}-${Math.floor(Math.random() * 28) + 1}`,
  status: Math.random() > 0.1 ? 'Active' : 'Suspended'
}));

const mockTransactions = [
  { id: 'TXN-9091', from: 'Mr. Rahim', to: 'Rafiqul Islam', amount: 5000, date: '2026-04-10', status: 'Completed' },
  { id: 'TXN-9092', from: 'Sami Rahman', to: 'Tanvir Ahmed', amount: 7000, date: '2026-04-15', status: 'Processing' }
];

const mockChats = [
  { id: 1, name: 'Rafiqul Islam', lastMessage: 'See you on Monday!', unread: 2 },
  { id: 2, name: 'Admin Support', lastMessage: 'Your KYC is approved.', unread: 0 },
];

// ==========================================
// 3. COMPONENTS & UTILS
// ==========================================
const generateId = (prefix = '') => `${prefix}${Math.random().toString(36).substring(2, 11)}`;

const FloatingBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#f8fafc]">
    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-60 animate-mesh" style={{ background: 'radial-gradient(circle, rgba(233,213,255,0.8) 0%, rgba(233,213,255,0) 70%)' }}></div>
    <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-50 animate-mesh" style={{ animationDelay: '-5s', background: 'radial-gradient(circle, rgba(199,210,254,0.8) 0%, rgba(199,210,254,0) 70%)' }}></div>
    <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full opacity-50 animate-mesh" style={{ animationDelay: '-10s', background: 'radial-gradient(circle, rgba(252,231,243,0.8) 0%, rgba(252,231,243,0) 70%)' }}></div>
  </div>
);

const hasForbiddenContent = (text) => /(?:\+?88|01)?\d{9,11}/.test(text) || /\S+@\S+\.\S+/.test(text);

// ==========================================
// 4. MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  
  const [globalVideos, setGlobalVideos] = useState(initialVideos);
  
  const handleVideoReaction = (videoId, type) => {
    setGlobalVideos(prev => prev.map(v => {
      if (v.id === videoId) {
        if (type === 'love') return { ...v, reactionsLove: (v.reactionsLove||0) + 1 };
        if (type === 'good') return { ...v, reactionsGood: (v.reactionsGood||0) + 1 };
        if (type === 'notGood') return { ...v, reactionsNotGood: (v.reactionsNotGood||0) + 1 };
      }
      return v;
    }));
    // Also update modal if open
    if (activeVideoModal && activeVideoModal.id === videoId) {
      setActiveVideoModal(prev => {
        if (type === 'love') return { ...prev, reactionsLove: (prev.reactionsLove||0) + 1 };
        if (type === 'good') return { ...prev, reactionsGood: (prev.reactionsGood||0) + 1 };
        if (type === 'notGood') return { ...prev, reactionsNotGood: (prev.reactionsNotGood||0) + 1 };
        return prev;
      });
    }
  };
  const [selectedLanguage, setSelectedLanguage] = useState('UK English');
  const [isLangMenuExpanded, setIsLangMenuExpanded] = useState(false);
  const t = (key) => translations[selectedLanguage]?.[key] || translations['UK English'][key] || key;
  const dir = selectedLanguage === 'Urdu (اردো)' ? 'rtl' : 'ltr';

  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', address: '', password: '', fatherName: '', motherName: '', birthYear: '', nid: '', parentsProfession: '', age: '', childInfo: '', profession: '', adminId: '' });

  // Secure Admin Features
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState('');

  // Admin Data States
  const [adminPendingUsers, setAdminPendingUsers] = useState(mockAdminUsers);
  const [adminAllUsers, setAdminAllUsers] = useState(mockAllUsers);
  const [transactions, setTransactions] = useState(mockTransactions);
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedLevel, setSelectedLevel] = useState(''); 
  const [selectedGroup, setSelectedGroup] = useState(''); 
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Video Search States
  const [videoSearchQuery, setVideoSearchQuery] = useState('');
  const [videoLevelFilter, setVideoLevelFilter] = useState('');
  const [videoSubjectFilter, setVideoSubjectFilter] = useState('');

  const [isNearbyActive, setIsNearbyActive] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  const [selectedTutor, setSelectedTutor] = useState(null); 
  const [activeVideoModal, setActiveVideoModal] = useState(null); 
  const [newCommentText, setNewCommentText] = useState('');

  const [studentBookings, setStudentBookings] = useState([
    { id: 101, tutorName: 'Rafiqul Islam', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rafiq&backgroundColor=b6e3f4', subject: 'Physics', status: 'accepted', date: 'Sat-Mon-Wed 10:00 AM', rate: '৳5000/mo' }
  ]);
  const [bookingFilter] = useState('all');
  const [bookingModalTutor, setBookingModalTutor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [paymentModalData, setPaymentModalData] = useState(null);
  const [reportModalData, setReportModalData] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [tutorProfile, setTutorProfile] = useState({ 
    certName: '', 
    homeAddress: '', 
    currentAddress: '', 
    varsityMail: '', 
    university: '', 
    prevTuitions: '', 
    achievements: '', 
    askingPrice: '', 
    uniRankLink: '', 
    profilePic: null, 
    cvFile: null, 
    agreeTerms: false,
    slots: ['Sat-Mon-Wed 10:00 AM', 'Sun-Tue-Thu 04:00 PM']
  });
  const [studentProfile, setStudentProfile] = useState({ fullName: '', email: '', mobile: '', address: '', institution: '', profilePic: null });

  const [tutorSelectedSubjects, setTutorSelectedSubjects] = useState([]);

  const [tutorVideos, setTutorVideos] = useState({});
  const [hasMembership, setHasMembership] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [tutorRequests, setTutorRequests] = useState([{ id: 201, studentName: 'Fahim Rahman', subject: 'Higher Math', level: 'HSC', status: 'pending' }]);

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [tutorNotifs, setTutorNotifs] = useState([
    { id: 1, text: 'New comment on your Physics video!', unread: true, videoId: 'v1' },
    { id: 2, text: 'A student requested a tuition.', unread: true }
  ]);

  const [idFront, setIdFront] = useState(null);

  const [verificationStep, setVerificationStep] = useState('none'); // 'none', 'scanning', 'matching', 'verified'
  const [isVerifying, setIsVerifying] = useState(false);
  const [ocrData, setOcrData] = useState(null);
  const [selfiePhoto, setSelfiePhoto] = useState(null);

  const runSecurityVerification = async () => {
    if (!idFront) return alert("Please upload ID front first.");
    setIsVerifying(true);
    setVerificationStep('scanning');
    await new Promise(r => setTimeout(r, 3000));
    setOcrData({ name: formData.name || 'VERIFIED USER', idNumber: 'NID-99203948576', status: 'Authentic' });
    
    setVerificationStep('matching');
    await new Promise(r => setTimeout(r, 3000));
    setVerificationStep('verified');
    setIsVerifying(false);
  };

  const roleConfig = {
    student: { icon: <GraduationCap size={16} />, label: t('student'), color: 'bg-gradient-to-r from-blue-600 to-indigo-600', text: 'text-indigo-600', border: 'border-indigo-500', bgLight: 'bg-indigo-50/50', message: t('msgStudent') },
    guardian: { icon: <Users size={16} />, label: t('guardian'), color: 'bg-gradient-to-r from-violet-600 to-purple-600', text: 'text-violet-600', border: 'border-violet-500', bgLight: 'bg-violet-50/50', message: t('msgGuardian') },
    tutor: { icon: <BookOpen size={16} />, label: t('tutor'), color: 'bg-gradient-to-r from-emerald-500 to-teal-500', text: 'text-emerald-600', border: 'border-emerald-500', bgLight: 'bg-emerald-50/50', message: t('msgTutor') },
    admin: { icon: <ShieldCheck size={16} />, label: t('admin'), color: 'bg-gradient-to-r from-slate-800 to-slate-900', text: 'text-slate-800', border: 'border-slate-800', bgLight: 'bg-slate-100', message: t('msgAdmin') },
    superAdmin: { icon: <Server size={16} />, label: t('superAdmin'), color: 'bg-gradient-to-r from-rose-700 to-pink-700', text: 'text-rose-700', border: 'border-rose-700', bgLight: 'bg-rose-50', message: t('msgSuperAdmin') }
  };

  const calculateProfileProgress = () => {
    let totalFields = 0;
    let filledFields = 0;

    const commonFields = ['name', 'email', 'mobile', 'address'];
    commonFields.forEach(f => {
      totalFields++;
      if (formData[f]) filledFields++;
    });

    if (role === 'tutor') {
      const tutorFields = ['university', 'prevTuitions', 'askingPrice'];
      tutorFields.forEach(f => {
        totalFields++;
        if (tutorProfile[f]) filledFields++;
      });
      totalFields++; if (tutorProfile.profilePic) filledFields++;
    } else {
      totalFields++; if (studentProfile.institution) filledFields++;
      totalFields++; if (studentProfile.profilePic) filledFields++;
    }

    return Math.round((filledFields / totalFields) * 100);
  };

  const profileProgress = calculateProfileProgress();

  // --- SMART SEARCH & SUGGESTION LOGIC ---
  const getSearchResults = () => {
    const allMatches = [...mockTutors].filter(t => {
      const nameMatch = searchQuery ? t.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      const uniMatch = selectedUniversity ? t.university.toLowerCase().includes(selectedUniversity.toLowerCase()) : true;
      const genderMatch = selectedGender ? t.gender === selectedGender : true;
      const locMatch = selectedLocation ? t.locationName.toLowerCase().includes(selectedLocation.toLowerCase()) : true;
      
      if (!nameMatch || !uniMatch || !genderMatch || !locMatch) return false;

      if (!selectedLevel && !selectedGroup && !selectedSubject) return true;

      return t.subjectData.some(s => {
        const levelMatch = selectedLevel ? s.level === selectedLevel : true;
        const groupMatch = selectedGroup ? s.group === selectedGroup : true;
        const subjectMatch = selectedSubject ? s.subject === selectedSubject : true;
        return levelMatch && groupMatch && subjectMatch;
      });
    });

    const topMatches = allMatches
      .filter(t => parseFloat(t.rating) >= 4.7)
      .sort((a, b) => isNearbyActive ? (a.distance - b.distance) : (b.rating - a.rating))
      .slice(0, 10);

    const exactIds = new Set(topMatches.map(t => t.id));
    const otherMatches = allMatches.filter(t => !exactIds.has(t.id));
    const sameSubjectDiffLevel = mockTutors.filter(t => {
      if (exactIds.has(t.id)) return false;
      if (!selectedSubject) return false;
      return t.subjects.includes(selectedSubject) && !allMatches.find(m => m.id === t.id);
    });

    const suggestions = [...otherMatches, ...sameSubjectDiffLevel]
      .sort((a, b) => isNearbyActive ? (a.distance - b.distance) : (b.rating - a.rating))
      .slice(0, 15);

    return { topMatches, suggestions };
  };

  const { topMatches, suggestions } = getSearchResults();

  const handleFindNearby = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        setIsLocating(false);
        setIsNearbyActive(true);
      },
      () => {
        setIsLocating(false);
        alert("Unable to retrieve location.");
      }
    );
  };

  const filteredBookings = studentBookings.filter(b => bookingFilter === 'all' || b.status === bookingFilter);

  const filteredVideos = globalVideos.map(video => {
    const tutor = mockTutors.find(t => t.id === video.tutorId);
    return { ...video, tutorDistance: tutor ? parseFloat(tutor.distance) : 999 };
  }).filter(video => {
    const matchesSearch = video.tutorName.toLowerCase().includes(videoSearchQuery.toLowerCase()) || 
                          video.title.toLowerCase().includes(videoSearchQuery.toLowerCase());
    const matchesSubject = !videoSubjectFilter || video.subject === videoSubjectFilter;
    const matchesLevel = !videoLevelFilter || video.level === videoLevelFilter;
    return matchesSearch && matchesSubject && matchesLevel;
  }).sort((a, b) => isNearbyActive ? (a.tutorDistance - b.tutorDistance) : 0);

  const handleLevelChange = (level) => { setSelectedLevel(level); setSelectedGroup(''); setSelectedSubject(''); };
  const handleGroupChange = (group) => { setSelectedGroup(group); setSelectedSubject(''); };
  
  const handleInputChange = (e) => { 
    const { name, value } = e.target; 
    setFormData(prev => ({ ...prev, [name]: value })); 
  };
  
  const handleProfileChange = (e, profileSetter) => {
    const { name, value, type, checked, files } = e.target;
    profileSetter(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if ((role === 'admin' || role === 'superAdmin') && !otpStep) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setTimeout(() => { setOtpStep(true); setIsSubmitting(false); alert(t('otpSentMsg')); }, 1000);
        },
        () => { 
          setTimeout(() => { setOtpStep(true); setIsSubmitting(false); alert("Mock Location used. OTP Sent!"); }, 1000);
        }
      );
      return; 
    }
    if ((role === 'admin' || role === 'superAdmin') && otpStep) {
      if (otp !== '1234') { alert("Invalid OTP! Use '1234'"); setIsSubmitting(false); return; }
    }

    await new Promise(r => setTimeout(r, 800)); 
    setIsAuthenticated(true);
    setIsSubmitting(false);
    if(role === 'admin' || role === 'superAdmin') setActivePage('adminHome');
  };

  const handleInitiateBooking = (tutor) => {
    const progress = calculateProfileProgress();
    if (progress < 80) {
      alert(`${t('profileIncomplete')} (${progress}%)`);
      setActivePage('updateProfile'); setSelectedTutor(null);
    } else { setBookingModalTutor(tutor); }
  };

  const handleConfirmBooking = () => {
    if(!selectedSlot) return alert(t('selectSlot'));
    setStudentBookings(prev => [{ 
      id: generateId(), 
      tutorName: bookingModalTutor.name, 
      image: bookingModalTutor.image,
      subject: bookingModalTutor.subjects[0], 
      status: 'pending', 
      date: selectedSlot,
      rate: bookingModalTutor.rate
    }, ...prev]);
    alert("Tuition request sent!");
    setBookingModalTutor(null); setSelectedSlot(''); setSelectedTutor(null); setActivePage('bookings'); window.scrollTo(0,0);
  };

  const handleTutorVideoUpload = (item, file) => {
    if (!file) return;
    const subId = `${item.level}-${item.subject}`;
    setTutorVideos(prev => ({...prev, [subId]: file}));
    const newVid = { 
      id: generateId('v_'), 
      tutorId: 99, 
      tutorName: formData.name || 'New Teacher', 
      subject: item.subject, 
      level: item.level,
      title: `${item.level} ${item.subject} Video Tutorial`, 
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', 
      rating: 0, 
      reactionsLove: 0,
      reactionsGood: 0,
      reactionsNotGood: 0,
      comments: [] 
    };
    setGlobalVideos(prev => [newVid, ...prev]);
  };

  const handleUpdateSlots = (newSlots) => {
    setTutorProfile(prev => ({ ...prev, slots: newSlots }));
    alert("Time slots updated successfully!");
  };

  const handlePostComment = () => {
    if(!newCommentText.trim()) return;
    if (role === 'tutor' && hasForbiddenContent(newCommentText)) return alert(t('contentBlockedAlert'));
    const updatedVideos = globalVideos.map(v => v.id === activeVideoModal.id ? { ...v, comments: [...v.comments, { id: generateId('c_'), role, author: formData.name || roleConfig[role].label, text: newCommentText }] } : v);
    setGlobalVideos(updatedVideos); setActiveVideoModal(updatedVideos.find(v => v.id === activeVideoModal.id)); setNewCommentText('');
  };

  const verifyUser = (id) => {
    const userToVerify = adminPendingUsers.find(u => u.id === id);
    if(userToVerify) {
      setAdminPendingUsers(prev => prev.filter(u => u.id !== id));
      setAdminAllUsers(prev => [...prev, { id: userToVerify.id, name: userToVerify.name, role: userToVerify.role, joinDate: new Date().toISOString().split('T')[0], status: 'Active' }]);
      alert("User Verified & Approved Successfully!");
    }
  };

  const rejectUser = (id) => {
    setAdminPendingUsers(prev => prev.filter(u => u.id !== id));
    alert("User Registration Rejected.");
  };

  const scrollTutors = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  let displayPage = activePage;
  if (role === 'tutor' && !isProfileComplete && activePage !== 'support') displayPage = 'updateProfile';

  const totalRevenue = transactions.filter(t => t.status === 'Completed').reduce((acc, curr) => acc + curr.amount, 0);

  if (isAuthenticated && activeVideoModal) {
    return (
      <div id="video-modal-container" className="fixed inset-0 z-[100] bg-slate-50 overflow-y-auto animate-in fade-in duration-300" dir={dir}>
        <div className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm p-4 flex justify-between items-center z-50 px-4 md:px-8 border-b border-slate-200">
           <div className="flex items-center gap-2 text-rose-600 font-bold text-xl"><Video size={24} /> <span>{t('demoFeed')}</span></div>
           <button onClick={() => setActiveVideoModal(null)} className="p-2 bg-slate-100 text-slate-500 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors flex items-center justify-center shadow-sm border border-slate-200 hover:border-red-200"><X size={20} /></button>
        </div>
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl mb-6 border border-slate-800">
               <img src={activeVideoModal.thumbnail} className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 flex items-center justify-center"><PlayCircle size={80} className="text-white opacity-80 hover:scale-110 transition-all cursor-pointer" /></div>
               <div className={`absolute bottom-4 ${dir === 'rtl' ? 'right-4' : 'left-4'} bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg`}>20:00</div>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">{activeVideoModal.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-5 mb-8 gap-4">
              <div className="flex items-center gap-4 cursor-pointer group" onClick={() => { const tutor = mockTutors.find(t => t.id === activeVideoModal.tutorId); if (tutor) { setSelectedTutor(tutor); setActiveVideoModal(null); setActivePage('dashboard'); window.scrollTo(0,0); } }}>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-white text-2xl shadow-md border-2 border-white group-hover:scale-105 transition-all">{activeVideoModal.tutorName.charAt(0)}</div>
                <div><p className="font-bold text-lg text-slate-800 group-hover:text-blue-600">{activeVideoModal.tutorName}</p><p className="text-sm font-semibold text-slate-500">{t(activeVideoModal.subject)} Teacher</p></div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleVideoReaction(activeVideoModal.id, 'love')} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 font-bold border border-rose-100 hover:bg-rose-100 transition-all">
                  <Heart size={18} fill="currentColor" /> {activeVideoModal.reactionsLove}
                </button>
                <button onClick={() => handleVideoReaction(activeVideoModal.id, 'good')} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-600 font-bold border border-emerald-100 hover:bg-emerald-100 transition-all">
                  <ThumbsUp size={18} fill="currentColor" /> {activeVideoModal.reactionsGood}
                </button>
                <button onClick={() => handleVideoReaction(activeVideoModal.id, 'notGood')} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 text-slate-600 font-bold border border-slate-100 hover:bg-slate-100 transition-all">
                  <ThumbsUp size={18} fill="currentColor" className="rotate-180" /> {activeVideoModal.reactionsNotGood}
                </button>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-8">
              <h3 className="font-black text-xl mb-6 flex items-center gap-2 text-slate-800"><MessageSquare size={22} className="text-blue-500"/> {t('comments')} ({activeVideoModal.comments.length})</h3>
              <div className="flex gap-4 mb-8">
                 <div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-600">{formData.name ? formData.name.charAt(0) : 'U'}</div>
                 <div className="flex-1 flex flex-col gap-2">
                   <div className="flex gap-2"><input type="text" value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} placeholder={t('writeComment')} className="flex-1 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl px-5 py-3 text-sm outline-none transition-all"/><button onClick={handlePostComment} disabled={!newCommentText.trim()} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-0.5 active:scale-95 transition-all"><Send size={18}/></button></div>
                 </div>
              </div>
              <div className="space-y-4">
                {activeVideoModal.comments.map(c => (
                  <div key={c.id} className={`flex gap-4 p-4 rounded-2xl ${c.role === 'tutor' ? 'bg-indigo-50 ml-12' : 'bg-slate-50 border border-slate-100'}`}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0 bg-slate-400">{c.author.charAt(0)}</div>
                    <div className="flex-1"><div className="flex items-center gap-2 mb-1"><span className="font-bold text-slate-800">{c.author}</span></div><p className="text-slate-700 text-sm">{c.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
             <h3 className="font-black text-xl text-slate-800 mb-4 flex items-center gap-2">
               <PlayCircle className="text-rose-500" size={24}/> {t('upNext')}
             </h3>
             <div className="flex flex-col gap-4">
               {globalVideos.filter(v => v.id !== activeVideoModal.id).map(v => (
                 <div key={v.id} onClick={() => { setActiveVideoModal(v); document.getElementById('video-modal-container')?.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex gap-4 cursor-pointer group bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                   <div className="w-40 h-24 bg-slate-900 rounded-xl overflow-hidden relative shrink-0">
                     <img src={v.thumbnail} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300" />
                     <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-all scale-125" />
                     <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">20:00</div>
                   </div>
                   <div className="flex flex-col py-1 pr-2 justify-center">
                     <h4 className="font-bold text-sm text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">{v.title}</h4>
                     <p className="text-xs font-medium text-slate-500 mt-1.5">{v.tutorName}</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{t(v.subject)}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="relative min-h-screen bg-[#fcfaff] font-sans text-slate-900 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900" dir={dir}>
        <FloatingBackground />
        
        {/* Modals */}
        {bookingModalTutor && (
          <div className="fixed inset-0 bg-black/60 z-[120] flex items-center justify-center p-4 animate-in fade-in duration-200">
             <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-100">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative"><button onClick={() => setBookingModalTutor(null)} className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/40 rounded-full"><X size={20}/></button><h2 className="text-2xl font-black mb-1">{t('bookMe')}</h2><p className="text-white/80 font-medium">{bookingModalTutor.name} • {t(bookingModalTutor.subjects[0])}</p></div>
                <div className="p-6"><h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Clock size={20} className="text-blue-500"/> {t('availableSlots')}</h3>
                   <div className="space-y-3 mb-8">{bookingModalTutor.slots?.map(slot => (<label key={slot} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedSlot === slot ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:border-blue-200 bg-slate-50'}`}><span className={`font-bold ${selectedSlot === slot ? 'text-blue-700' : 'text-slate-700'}`}>{slot}</span><input type="radio" name="slot" value={slot} checked={selectedSlot === slot} onChange={() => setSelectedSlot(slot)} className="w-5 h-5 accent-blue-600" /></label>))}</div>
                   <button onClick={handleConfirmBooking} className="w-full py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl font-black text-lg hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-indigo-100 flex items-center justify-center gap-2 active:scale-95"><CheckSquare size={20}/> {t('confirmBooking')}</button>
                </div>
             </div>
          </div>
        )}

        {paymentModalData && (
          <div className="fixed inset-0 bg-black/60 z-[120] flex items-center justify-center p-4 animate-in fade-in duration-200">
             <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-100">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white relative"><button onClick={() => setPaymentModalData(null)} className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/40 rounded-full"><X size={20}/></button><h2 className="text-2xl font-black mb-1">Secure Payment</h2><p className="text-white/80 font-medium">Pay tuition fee securely.</p></div>
                <div className="p-6 text-center">
                   <p className="text-sm text-slate-500 font-bold uppercase mb-1">Paying to</p><h3 className="text-xl font-black text-slate-800 mb-6">{paymentModalData.tutorName}</h3>
                   <div className="bg-slate-50 p-4 rounded-2xl border mb-6 flex flex-col gap-3">
                      <button className="w-full py-3 bg-pink-600 text-white font-bold rounded-xl shadow-md hover:bg-pink-700">Pay with bKash</button>
                      <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 transition-all">Pay with Card</button>
                   </div>
                   <button onClick={() => { 
                     alert("Payment Successful!"); 
                     setTransactions(prev => [{id: generateId('TXN-'), from: formData.name || 'User', to: paymentModalData.tutorName, amount: 5000, date: new Date().toISOString().split('T')[0], status: 'Completed'}, ...prev]);
                     setPaymentModalData(null); 
                   }} className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-black text-lg shadow-lg shadow-emerald-100 hover:shadow-emerald-200 transition-all active:scale-95">Simulate Success</button>
                </div>
             </div>
          </div>
        )}

        {reportModalData && (
          <div className="fixed inset-0 bg-black/60 z-[120] flex items-center justify-center p-4 animate-in fade-in duration-200">
             <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-100">
                <div className="bg-gradient-to-r from-red-600 to-rose-600 p-6 text-white relative">
                  <button onClick={() => { setReportModalData(null); setReportReason(''); }} className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/40 rounded-full"><X size={20}/></button>
                  <h2 className="text-2xl font-black mb-1 flex items-center gap-2"><AlertCircle size={24} /> Report {reportModalData.role}</h2>
                  <p className="text-white/80 font-medium">Reporting {reportModalData.name}</p>
                </div>
                <div className="p-6">
                   <label className="block text-sm font-bold text-slate-700 mb-2">Reason for reporting</label>
                   <textarea 
                     rows="5" 
                     value={reportReason}
                     onChange={(e) => setReportReason(e.target.value)}
                     className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-500 transition-all font-medium resize-none mb-6" 
                     placeholder={`Please describe why you are reporting this ${reportModalData.role.toLowerCase()}...`}
                   ></textarea>
                   <button onClick={() => { 
                     if(!reportReason.trim()) return alert("Please enter a reason.");
                     alert("Report submitted successfully. Our team will review it."); 
                     setReportModalData(null);
                     setReportReason('');
                   }} className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-red-100 hover:-translate-y-1 active:scale-95 transition-all">Submit Report</button>
                </div>
             </div>
          </div>
        )}

        <div className="relative z-10 min-h-screen flex flex-col">
          <nav className="bg-white/70 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.03)] border-b border-white/50 px-6 py-4 flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsMenuOpen(true)} className="p-2.5 hover:bg-white/80 rounded-2xl transition-all active:scale-90 shadow-sm border border-slate-100"><Menu size={22} className="text-slate-800" /></button>
              <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActivePage('dashboard')}>
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h1 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-violet-700 tracking-tight">Tuition Hub</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {role === 'tutor' && (
                <div className="relative">
                  <button onClick={() => setIsNotifOpen(!isNotifOpen)} className="p-2 rounded-full hover:bg-slate-100 relative transition-colors">
                    <Bell size={22} className="text-slate-600" />
                    {tutorNotifs.some(n => n.unread) && <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>}
                  </button>
                  {isNotifOpen && (
                    <div className={`absolute top-full mt-2 ${dir === 'rtl' ? 'left-0' : 'right-0'} w-72 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50`}>
                      <div className="p-3 bg-slate-50 border-b border-slate-100 font-bold text-slate-700">{t('notifications')}</div>
                      <div className="max-h-64 overflow-y-auto">
                        {tutorNotifs.length === 0 ? (
                          <div className="p-4 text-center text-sm text-slate-500">{t('noNotifs')}</div>
                        ) : (
                          tutorNotifs.map(n => (
                            <button key={n.id} onClick={() => {
                              const vid = globalVideos.find(v => v.id === n.videoId);
                              if(vid) setActiveVideoModal(vid);
                              setTutorNotifs(prev => prev.map(notif => notif.id === n.id ? {...notif, unread: false} : notif));
                              setIsNotifOpen(false);
                            }} className={`w-full text-left p-3 border-b border-slate-50 text-sm hover:bg-slate-50 transition-colors ${n.unread ? 'bg-blue-50/50 font-semibold' : 'text-slate-600'}`}>
                              {n.text}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className={`hidden md:block px-3 py-1.5 rounded-full text-sm font-bold ${roleConfig[role].bgLight} ${roleConfig[role].text}`}>
                {roleConfig[role].label} {t('portal')}
              </div>
              <button 
                onClick={() => { setActivePage('updateProfile'); setIsMenuOpen(false); window.scrollTo(0,0); }} 
                className={`flex items-center gap-2 p-1.5 rounded-full border-2 transition-all ${activePage === 'updateProfile' ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                title={t('updateProfile')}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${roleConfig[role].color}`}>
                  {formData.name ? formData.name.charAt(0).toUpperCase() : <User size={18} />}
                </div>
              </button>
            </div>
          </nav>

          {isMenuOpen && <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300" onClick={() => setIsMenuOpen(false)}></div>}
          <div className={`fixed top-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} h-full w-80 bg-white/80 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? 'translate-x-0' : (dir === 'rtl' ? 'translate-x-full' : '-translate-x-full')}`}>
            <div className="p-6 border-b border-white/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={18} />
                </div>
                <h2 className="text-lg font-black text-slate-800 tracking-tight">Navigation</h2>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-all active:scale-90"><X size={20}/></button>
            </div>
            <div className="py-6 flex flex-col h-[calc(100%-80px)] overflow-y-auto custom-scrollbar">
              <div className="flex-1 space-y-1.5 px-4">
                {(role === 'admin' || role === 'superAdmin') && (
                  <>
                    <button onClick={() => { setActivePage('adminHome'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'adminHome' ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Grid size={20} /> <span>{t('adminDashboard')}</span></button>
                    <button onClick={() => { setActivePage('adminVerify'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'adminVerify' ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><ShieldCheck size={20} /> <span>{t('verifyUsers')}</span></button>
                    <button onClick={() => { setActivePage('adminUsers'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'adminUsers' ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Users size={20} /> <span>{t('adminUsers')}</span></button>
                    <button onClick={() => { setActivePage('adminPayments'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'adminPayments' ? 'bg-slate-800 text-white shadow-lg shadow-slate-200' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><CreditCard size={20} /> <span>{t('adminPayments')}</span></button>
                    <button onClick={() => { setActivePage('adminReports'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'adminReports' ? 'bg-slate-800 text-white shadow-lg shadow-slate-200' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Activity size={20} /> <span>{t('adminReports')}</span></button>
                    <button onClick={() => { setActivePage('sysSettings'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'sysSettings' ? 'bg-slate-800 text-white shadow-lg shadow-slate-200' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Activity size={20} /> <span>{t('sysSettings')}</span></button>
                    <button onClick={() => { setActivePage('serverMgmt'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'serverMgmt' ? 'bg-slate-800 text-white shadow-lg shadow-slate-200' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Server size={20} /> <span>{t('serverMgmt')}</span></button>
                  </>
                )}
                {role === 'tutor' && (
                  <>
                    <button onClick={() => { setActivePage('dashboard'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'dashboard' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Grid size={20} /> <span>{t('dashboardPage')}</span></button>
                    <button onClick={() => { setActivePage('requests'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'requests' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Briefcase size={20} /> <span>Tuition Requests</span></button>
                    <button onClick={() => { setActivePage('messages'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'messages' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><MessageSquare size={20} /> <span>{t('messages')}</span></button>
                    <button onClick={() => { setActivePage('updateProfile'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'updateProfile' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><User size={20} /> <span>{t('updateProfile')}</span></button>
                  </>
                )}
                {(role === 'student' || role === 'guardian') && (
                  <>
                    <button onClick={() => { setActivePage('dashboard'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Grid size={20} /> <span>{t('dashboardPage')}</span></button>
                    <button onClick={() => { setActivePage('bookings'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'bookings' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><CheckSquare size={20} /> <span>{t('myBookings')}</span></button>
                    <button onClick={() => { setActivePage('demoClasses'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'demoClasses' ? 'bg-rose-600 text-white shadow-lg shadow-rose-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Video size={20} /> <span>{t('allDemoClasses')}</span></button>
                    <button onClick={() => { setActivePage('findTutor'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'findTutor' ? 'bg-violet-600 text-white shadow-lg shadow-violet-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><Search size={20} /> <span>{t('findTutor')}</span></button>
                    <button onClick={() => { setActivePage('updateProfile'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'updateProfile' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><User size={20} /> <span>{t('updateProfile')}</span></button>
                    <button onClick={() => { setActivePage('reportTeacher'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'reportTeacher' ? 'bg-red-500 text-white shadow-lg shadow-red-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><AlertCircle size={20} /> <span>{t('reportTeacher')}</span></button>
                  </>
                )}
                <div className="my-4 border-t border-white/50"></div>
                <div className="flex flex-col"><button onClick={() => setIsLangMenuExpanded(!isLangMenuExpanded)} className="w-full flex items-center justify-between px-4 py-3.5 text-slate-600 hover:bg-white rounded-2xl text-left transition-all font-bold"><div className="flex items-center gap-3"><Globe size={20} /> <span>{t('language')}</span></div><ChevronRight size={16} className={isLangMenuExpanded ? 'rotate-90' : ''} /></button><div className={`overflow-hidden transition-all duration-300 ${isLangMenuExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}><div className={`px-2 py-2 space-y-1 bg-white/40 backdrop-blur-md rounded-2xl mx-2 border border-white/50 ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}>{supportedLanguages.map(lang => (<button key={lang} onClick={() => { setSelectedLanguage(lang); setIsLangMenuExpanded(false); }} className={`w-full text-left px-3 py-2 text-sm rounded-xl hover:bg-white transition-all ${selectedLanguage === lang ? 'bg-white font-black text-indigo-600 shadow-sm' : 'text-slate-500 font-bold'}`}>{lang}</button>))}</div></div></div>
                <button onClick={() => { setActivePage('support'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-left transition-all ${activePage === 'support' ? 'bg-orange-500 text-white shadow-lg shadow-orange-100' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}><HelpCircle size={20} /> <span>{t('support')}</span></button>
              </div>
              <div className="px-6 border-t border-white/50 pt-6 mt-auto">
                <button onClick={() => { setIsAuthenticated(false); setIsMenuOpen(false); setOtpStep(false); setOtp(''); }} className="w-full flex items-center gap-3 px-4 py-3.5 text-rose-600 hover:bg-rose-50 rounded-2xl text-left font-black transition-all">
                  <LogOut size={20} /> {t('logout')}
                </button>
              </div>
            </div>
          </div>

          <main className="p-6 max-w-5xl mx-auto flex-1 w-full relative z-10 overflow-y-auto pb-24">
            
            {(role === 'admin' || role === 'superAdmin') && activePage === 'adminHome' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-lg mb-8">
                    <h2 className="text-3xl font-black mb-2 flex items-center gap-2"><Grid size={32} /> {t('adminDashboard')}</h2>
                    <p className="text-white/70 text-lg">System monitoring and comprehensive overview.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                     <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center gap-2"><div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-2"><Users size={20}/></div><p className="text-slate-500 font-bold text-xs uppercase">Total Users</p><p className="text-3xl font-black">{adminAllUsers.length + adminPendingUsers.length + 1}</p></div>
                     <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center gap-2"><div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-2"><BookOpen size={20}/></div><p className="text-slate-500 font-bold text-xs uppercase">Active Tuitions</p><p className="text-3xl font-black">{300}</p></div>
                     <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center gap-2"><div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-2"><ShieldAlert size={20}/></div><p className="text-slate-500 font-bold text-xs uppercase">Pending KYC</p><p className="text-3xl font-black text-amber-600">{adminPendingUsers.length}</p></div>
                     <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center gap-2"><div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-2"><CreditCard size={20}/></div><p className="text-slate-500 font-bold text-xs uppercase">Total Revenue</p><p className="text-3xl font-black text-purple-600">৳{totalRevenue}</p></div>
                  </div>
              </div>
            )}

            {(role === 'admin' || role === 'superAdmin') && activePage === 'adminVerify' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-500 p-8 rounded-3xl text-white shadow-lg mb-8"><h2 className="text-3xl font-black mb-2 flex items-center gap-2"><ShieldCheck size={32} /> {t('verifyUsers')} (KYC)</h2><p className="text-white/80 text-lg">Approve or reject registrations.</p></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                     {adminPendingUsers.length === 0 ? (
                        <div className="text-center text-slate-400 py-12 border-2 border-dashed border-slate-200 rounded-2xl font-bold">No pending verifications!</div>
                     ) : (
                        <div className="overflow-x-auto"><table className="w-full text-left"><thead><tr className="border-b border-slate-200 text-slate-400 text-xs uppercase"><th className="pb-4 font-bold">User</th><th className="pb-4 font-bold">Role</th><th className="pb-4 font-bold text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-100">
                             {adminPendingUsers.map(u => (<tr key={u.id} className="hover:bg-slate-50 transition-colors"><td className="py-4 font-bold text-slate-800">{u.name}</td><td className="py-4"><span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">{u.role}</span></td><td className="py-4 text-right"><div className="flex justify-end gap-2"><button onClick={()=>verifyUser(u.id)} className="px-4 py-2 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-sm">{t('accept')}</button><button onClick={()=>rejectUser(u.id)} className="px-4 py-2 bg-white text-red-500 font-bold rounded-xl border hover:bg-red-50 transition-colors shadow-sm">Reject</button></div></td></tr>))}
                           </tbody></table></div>
                     )}
                  </div>
              </div>
            )}

            {selectedTutor && (
              <div className="animate-in fade-in zoom-in-95 duration-300 mb-12">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden relative border border-slate-100">
                  <button onClick={() => setSelectedTutor(null)} className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} p-2.5 bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 rounded-full z-10`}><X size={24} /></button>
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col items-center justify-center md:w-1/3 border-b md:border-b-0 md:border-r border-slate-200">
                      <img src={selectedTutor.image} className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-5 object-cover" />
                      <h2 className="text-2xl font-bold text-slate-800 text-center flex items-center justify-center gap-2">{selectedTutor.name} {selectedTutor.isVerified && <ShieldCheck size={20} className="text-blue-500 fill-blue-50" />}</h2>
                      <div className="flex items-center gap-1 mt-3 text-amber-500 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100"><Star size={18} fill="currentColor" /><span className="font-bold text-lg">{selectedTutor.rating}</span></div>
                      <div className="mt-8 text-center bg-white/60 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/50 w-full shadow-sm"><p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{t('hourlyRate')}</p><p className="text-3xl font-black text-blue-600">{selectedTutor.rate}</p></div>
                    </div>
                    <div className="p-8 md:w-2/3 flex flex-col">
                      <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">{t('aboutMe')}</h3><p className="text-slate-600 mb-6 leading-relaxed">{selectedTutor.bio}</p>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2"><FileText size={20} className="text-indigo-500"/> {t('moreDetails')}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100"><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('experience')}</p><p className="font-semibold text-slate-700 flex items-center gap-2"><Briefcase size={18} className="text-blue-500"/> {selectedTutor.experience}</p></div>
                         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100"><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('currentUniversity')}</p><p className="font-semibold text-slate-700 flex items-center gap-2"><Building2 size={18} className="text-emerald-500"/> {selectedTutor.university}</p></div>
                         <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 sm:col-span-2"><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t('achievementsLife')}</p><p className="font-semibold text-slate-700 flex items-start gap-2"><Award size={18} className="text-amber-500 shrink-0 mt-0.5"/> {selectedTutor.achievements}</p></div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                        <button onClick={() => handleInitiateBooking(selectedTutor)} className="flex-1 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl font-black text-lg hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-indigo-100 flex items-center justify-center gap-2 active:scale-95"><CheckSquare size={20}/> {t('bookMe')}</button>
                        <button onClick={() => alert("Message interface opened!")} className="flex-1 py-4 bg-indigo-50 text-indigo-700 rounded-2xl font-bold text-lg hover:bg-indigo-100 transition-all flex items-center justify-center gap-2 border border-indigo-100 hover:-translate-y-1 hover:shadow-md"><MessageSquare size={20}/> {t('messageTutor')}</button>
                        <button onClick={() => setReportModalData({ userId: selectedTutor.id, name: selectedTutor.name, role: 'Teacher' })} className="flex-none py-4 px-6 bg-red-50 text-red-600 rounded-2xl font-bold text-lg hover:bg-red-100 transition-all flex items-center justify-center gap-2 border border-red-100 hover:-translate-y-1 hover:shadow-md" title="Report Teacher"><AlertCircle size={20}/></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!selectedTutor && displayPage === 'dashboard' && role !== 'admin' && role !== 'superAdmin' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className={`p-8 rounded-2xl ${roleConfig[role].color} text-white shadow-lg relative overflow-hidden`}>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-2">{t('welcome')}</h2>
                    <p className="text-white/90 text-lg mb-6">{roleConfig[role].message}</p>
                    
                    {/* Compact Dashboard Progress Bar */}
                    <div className="max-w-xs bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider">{t('profileProgress')}</span>
                        <span className="text-sm font-black">{profileProgress}%</span>
                      </div>
                      <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: `${profileProgress}%` }}></div>
                      </div>
                      {profileProgress < 100 && (
                        <button onClick={() => setActivePage('updateProfile')} className="mt-3 text-[10px] font-black bg-white text-slate-800 px-3 py-1 rounded-full uppercase hover:bg-slate-100 transition-colors">
                          Complete Now
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 transform scale-150">
                    {roleConfig[role].icon}
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(role === 'student' || role === 'guardian') ? (
                    <>
                      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100 col-span-1 md:col-span-2"><h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Search className="text-blue-500" /> {t('findTutor')}</h3><div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"><select onChange={(e) => handleLevelChange(e.target.value)} value={selectedLevel} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white outline-none"><option value="">{t('step1')}</option><option value="SSC">{t('SSC')}</option><option value="HSC">{t('HSC')}</option></select><select disabled={!selectedLevel} onChange={(e) => handleGroupChange(e.target.value)} value={selectedGroup} className="flex-1 py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none"><option value="">{t('step2')}</option>{selectedLevel && ['Science', 'Arts', 'Commerce'].map(grp => <option key={grp} value={grp}>{t(grp)}</option>)}</select><select disabled={!selectedGroup} onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject} className="flex-1 py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none"><option value="">{t('step3')}</option>{selectedLevel && selectedGroup && curriculumData[selectedLevel][selectedGroup].map(sub => <option key={sub} value={sub}>{t(sub)}</option>)}</select></div>{selectedSubject && <button onClick={() => { setActivePage('findTutor'); window.scrollTo(0,0); }} className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold">{t('search')}</button>}</div>
                      <div className="col-span-1 md:col-span-2 mt-4"><h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Video className="text-rose-500" /> {t('demoFeed')}</h3><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {globalVideos.slice(0,6).map(video => (
<div key={video.id} className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => setActiveVideoModal(video)}><div className="relative h-40 bg-slate-200"><img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center"><PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" /></div><span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-2 py-1 rounded-md">{t(video.subject)}</span></div><div className="p-4 flex-1 flex flex-col"><h4 className="font-bold text-slate-800 line-clamp-1">{video.title}</h4><p onClick={(e) => { e.stopPropagation(); const tutor = mockTutors.find(t => t.id === video.tutorId); if(tutor) { setSelectedTutor(tutor); window.scrollTo(0,0); } }} className="text-sm text-slate-500 mb-4 hover:text-blue-600 hover:underline cursor-pointer w-max transition-colors flex items-center gap-1">{video.tutorName} {mockTutors.find(t => t.id === video.tutorId)?.isVerified && <ShieldCheck size={12} className="text-blue-500 fill-blue-50" />}</p><div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100"><div className="flex items-center gap-2 text-slate-500 text-[10px]"><span className="flex items-center gap-1 font-bold"><Heart size={12} className="text-rose-500 fill-rose-500" /> {video.reactionsLove}</span><span className="flex items-center gap-1 font-bold"><ThumbsUp size={12} className="text-emerald-500 fill-emerald-500" /> {video.reactionsGood}</span><span className="flex items-center gap-1 font-bold"><ThumbsUp size={12} className="text-slate-400 fill-slate-400 rotate-180" /> {video.reactionsNotGood}</span></div><span className="text-blue-600 font-semibold text-xs">{t('watchNow')}</span></div></div></div>))}</div></div>
                      
                      <div className="col-span-1 md:col-span-2 mt-4 relative">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Star className="text-amber-500" fill="currentColor" /> {t('topTutors')}</h3>
                          <div className="flex gap-2">
                            <button onClick={() => scrollTutors('left')} className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-slate-50 transition-all border border-slate-200"><ChevronLeft size={20} className={dir === 'rtl' ? 'rotate-180' : ''} /></button>
                            <button onClick={() => scrollTutors('right')} className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-slate-50 transition-all border border-slate-200"><ChevronRight size={20} className={dir === 'rtl' ? 'rotate-180' : ''} /></button>
                          </div>
                        </div>
                        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden">
                          {mockTutors.slice(0, 20).sort((a,b) => b.rating - a.rating).map(tutor => {
                            const tutorVideoData = globalVideos.find(v => v.id === tutor.demoVideoId);
                            return (
                              <div key={tutor.id} className="min-w-[280px] sm:min-w-[300px] snap-center shrink-0 bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
                                <div className="relative h-40 w-full bg-slate-900 overflow-hidden cursor-pointer" onClick={(e) => { e.stopPropagation(); setActiveVideoModal(tutorVideoData || globalVideos[0]); }}>
                                  <img src={tutorVideoData?.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-300" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                  <div className={`absolute bottom-3 ${dir === 'rtl' ? 'right-3' : 'left-3'} right-16 flex flex-col items-start gap-1`}>
                                    <span className="text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white px-2 py-0.5 rounded shadow-sm">{t(tutorVideoData?.subject || tutor.subjects[0])}</span>
                                    <h4 className="text-white text-sm font-bold line-clamp-1 drop-shadow-md">{tutorVideoData?.title || 'Demo Masterclass'}</h4>
                                  </div>
                                  <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-all scale-150 drop-shadow-2xl" />
                                </div>
                                <div className="p-5 pt-12 flex-1 text-center relative cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setSelectedTutor(tutor)}>
                                  <img src={tutor.image} className={`w-20 h-20 object-cover rounded-full border-4 border-white absolute -top-10 ${dir === 'rtl' ? 'left-4' : 'right-4'} shadow-md bg-white`} />
                                  <div className="flex flex-col h-full justify-between">
                                    <div className="text-left">
                                      <h4 className="text-lg font-bold text-slate-800 flex items-center gap-1">{tutor.name} {tutor.isVerified && <ShieldCheck size={16} className="text-blue-500 fill-blue-50" />}</h4>
                                      <div className="flex items-center gap-1 mt-1 text-amber-500"><Star size={16} fill="currentColor" /><span className="font-bold text-sm">{tutor.rating}</span><span className="text-slate-400 text-xs ml-1">({tutor.reviews} {t('reviews')})</span></div>
                                      <div className="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-2"><MapPin size={12} className="text-emerald-500 shrink-0" /> <span className="truncate">{tutor.distance} {t('kmAway')} • {tutor.locationName}</span></div>
                                    </div>
                                    <button className="mt-6 w-full py-3 bg-white/80 hover:bg-indigo-600 hover:text-white text-slate-700 rounded-2xl font-black text-sm py-3 transition-all duration-300 border border-white/50 shadow-sm hover:shadow-indigo-100 hover:-translate-y-0.5 active:scale-95">View Profile</button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Show All Teachers Section Preview */}
                      <div className="col-span-1 md:col-span-2 mt-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><Users className="text-blue-500" /> Explore Teacher Profiles</h3>
                          <button onClick={() => { setActivePage('findTutor'); window.scrollTo(0,0); }} className="text-blue-600 font-bold hover:underline flex items-center gap-1">Explore All <ChevronRight size={16} /></button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {mockTutors.slice(20, 24).map(tutor => (
                            <div key={tutor.id} className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 p-4 hover:shadow-md transition-all cursor-pointer" onClick={() => setSelectedTutor(tutor)}>
                              <div className="flex items-center gap-3 mb-3">
                                <img src={tutor.image} className="w-12 h-12 rounded-full border border-slate-100" />
                                <div>
                                  <h4 className="font-bold text-slate-800 text-sm line-clamp-1 flex items-center gap-1">{tutor.name} {tutor.isVerified && <ShieldCheck size={12} className="text-blue-500 fill-blue-50" />}</h4>
                                  <div className="flex items-center gap-1 text-amber-500"><Star size={10} fill="currentColor" /><span className="text-[10px] font-bold">{tutor.rating}</span></div>
                                </div>
                              </div>
                              <p className="text-[10px] text-slate-500 font-medium line-clamp-1 mb-2">{tutor.subjects.join(', ')}</p>
                              <div className="text-[9px] text-slate-400 flex items-center gap-1"><MapPin size={10} className="text-emerald-500" /> {tutor.locationName}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Show All Demo Classes Section Preview */}
                      <div className="col-span-1 md:col-span-2 mt-8 pb-12">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><PlaySquare className="text-rose-500" /> Explore Demo Classes</h3>
                          <button onClick={() => { setActivePage('demoClasses'); window.scrollTo(0,0); }} className="text-rose-600 font-bold hover:underline flex items-center gap-1">Watch All <ChevronRight size={16} /></button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {globalVideos.slice(6, 10).map(video => (
                            <div key={video.id} className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 overflow-hidden hover:shadow-md transition-all cursor-pointer group" onClick={() => setActiveVideoModal(video)}>
                              <div className="relative h-28 bg-slate-100">
                                <img src={video.thumbnail} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center"><PlayCircle size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                              </div>
                              <div className="p-3">
                                <h4 className="font-bold text-slate-800 text-xs line-clamp-1 mb-1">{video.title}</h4>
                                <p className="text-[9px] text-slate-500 font-medium">{video.tutorName}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // TUTOR SECTION
                    <>
                      {/* Quick Stats Row */}
                      <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex items-center gap-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group hover:-translate-y-1">
                          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><Briefcase size={28}/></div>
                          <div><p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Total Requests</p><p className="text-3xl font-black text-slate-800">{tutorRequests.length}</p></div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex items-center gap-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group hover:-translate-y-1">
                          <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><Heart size={28}/></div>
                          <div><p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Video Reach</p><p className="text-3xl font-black text-slate-800">{globalVideos.filter(v => v.tutorId === 99).reduce((acc, v) => acc + (v.reactionsLove||0) + (v.reactionsGood||0), 0)}</p></div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex items-center gap-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group hover:-translate-y-1">
                          <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform"><Clock size={28}/></div>
                          <div><p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Active Slots</p><p className="text-3xl font-black text-slate-800">{tutorProfile.slots?.length || 0}</p></div>
                        </div>
                      </div>

                      {/* Time Slots Management */}
                      <div className="col-span-1 md:col-span-2 bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 mt-4">
                        <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3"><Clock className="text-indigo-500" /> Manage Available Slots</h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {tutorProfile.slots?.map((slot, idx) => (
                            <span key={idx} className="bg-indigo-50/50 text-indigo-700 px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-3 border border-indigo-100 group transition-all hover:bg-white hover:shadow-sm">
                              {slot}
                              <button onClick={() => handleUpdateSlots(tutorProfile.slots.filter((_, i) => i !== idx))} className="text-slate-400 hover:text-rose-500 transition-colors"><X size={14}/></button>
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <input id="new-slot-input" type="text" placeholder="e.g. Fri 10:00 AM" className="flex-1 p-3.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none text-sm focus:border-indigo-400 focus:bg-white transition-all shadow-inner font-medium" />
                          <button onClick={() => {
                            const val = document.getElementById('new-slot-input').value;
                            if(val) {
                              handleUpdateSlots([...(tutorProfile.slots || []), val]);
                              document.getElementById('new-slot-input').value = '';
                            }
                          }} className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:shadow-lg shadow-indigo-100 transition-all active:scale-95">Add Slot</button>
                        </div>
                      </div>

                      {/* Video Performance */}
                      <div className="col-span-1 md:col-span-2 bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 mt-6">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-xl font-black text-slate-800 flex items-center gap-3"><Activity className="text-rose-500" /> Video Performance</h3>
                          <span className="text-[10px] font-black text-slate-400 bg-white/50 px-3 py-1.5 rounded-full border border-white/50 uppercase tracking-widest">Reach & Engagement</span>
                        </div>
                        <div className="space-y-4">
                          {globalVideos.filter(v => v.tutorId === 99).length === 0 ? (
                            <div className="text-center py-12 bg-white/40 rounded-3xl border-2 border-dashed border-white/60">
                               <Video size={40} className="mx-auto text-slate-300 mb-3" />
                               <p className="text-slate-400 font-bold text-sm italic">No videos uploaded yet.</p>
                            </div>
                          ) : (
                            globalVideos.filter(v => v.tutorId === 99).map(v => (
                              <div key={v.id} className="flex items-center gap-5 p-4 hover:bg-white/80 rounded-2xl transition-all border border-transparent hover:border-white/60 group cursor-pointer">
                                <div className="w-20 h-12 bg-slate-200 rounded-xl overflow-hidden shrink-0 shadow-sm"><img src={v.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                                <div className="flex-1 min-w-0"><h4 className="font-black text-slate-800 text-sm truncate group-hover:text-indigo-600 transition-colors">{v.title}</h4><p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">{t(v.subject)} • {v.level}</p></div>
                                <div className="flex items-center gap-6 text-xs font-black">
                                  <div className="flex flex-col items-center gap-1"><Heart size={16} className="text-rose-500" /><span className="text-slate-600">{v.reactionsLove}</span></div>
                                  <div className="flex flex-col items-center gap-1"><ThumbsUp size={16} className="text-emerald-500" /><span className="text-slate-600">{v.reactionsGood}</span></div>
                                  <div className="flex flex-col items-center gap-1"><MessageSquare size={16} className="text-indigo-500" /><span className="text-slate-600">{v.comments.length}</span></div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                      <div className="col-span-1 md:col-span-2 bg-white/60 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 mt-8 transition-all hover:shadow-lg">
                        <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3"><BookOpen className="text-emerald-500" /> {t('teachingSubjects')}</h3>
                        <div className="flex gap-4 mb-8 flex-wrap">
                          {tutorSelectedSubjects.length === 0 && <span className="text-slate-400 italic font-black text-xs uppercase tracking-widest bg-white/40 px-5 py-2.5 rounded-2xl border border-white/60 shadow-inner">No subjects added yet.</span>}
                          {tutorSelectedSubjects.map(item => { 
                            const subId = `${item.level}-${item.subject}`; 
                            return (
                              <span key={subId} className="bg-emerald-50/50 text-emerald-700 px-5 py-2.5 rounded-2xl font-black text-xs border border-emerald-100 flex items-center gap-3 shadow-sm hover:bg-white transition-all group">
                                {t(item.level)} - {t(item.subject)} 
                                <button onClick={() => setTutorSelectedSubjects(p => p.filter(s => s.subject !== item.subject || s.level !== item.level))} className="text-emerald-300 hover:text-rose-500 transition-colors">
                                  <X size={16}/>
                                </button>
                              </span>
                            )
                          })}
                        </div>
                        {tutorSelectedSubjects.length < 3 && (
                          <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4 p-6 bg-white/40 rounded-3xl border border-white/60 shadow-inner">
                              <select onChange={(e) => handleLevelChange(e.target.value)} value={selectedLevel} className="flex-1 py-3.5 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm outline-none focus:border-emerald-400 font-bold text-sm transition-all shadow-sm">
                                <option value="">{t('step1')}</option>
                                <option value="SSC">{t('SSC')}</option>
                                <option value="HSC">{t('HSC')}</option>
                              </select>
                              <select disabled={!selectedLevel} onChange={(e) => handleGroupChange(e.target.value)} value={selectedGroup} className="flex-1 py-3.5 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm outline-none focus:border-emerald-400 font-bold text-sm disabled:opacity-30 transition-all shadow-sm">
                                <option value="">{t('step2')}</option>
                                {selectedLevel && ['Science', 'Arts', 'Commerce'].map(grp => <option key={grp} value={grp}>{t(grp)}</option>)}
                              </select>
                              <select disabled={!selectedGroup} onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject} className="flex-1 py-3.5 px-4 rounded-2xl border border-white/60 bg-white/50 backdrop-blur-sm outline-none focus:border-emerald-400 font-bold text-sm disabled:opacity-30 transition-all shadow-sm">
                                <option value="">{t('step3')}</option>
                                {selectedLevel && selectedGroup && curriculumData[selectedLevel][selectedGroup].map(sub => <option key={sub} value={sub}>{t(sub)}</option>)}
                              </select>
                            </div>
                            {selectedSubject && (
                              <div className="flex justify-end animate-in fade-in zoom-in-95">
                                <button 
                                  onClick={() => { if(!tutorSelectedSubjects.find(s => s.subject === selectedSubject && s.level === selectedLevel)) { setTutorSelectedSubjects(prev => [...prev, {level: selectedLevel, group: selectedGroup, subject: selectedSubject}]); setSelectedLevel(''); setSelectedGroup(''); setSelectedSubject(''); } else { alert("Subject already added!"); } }} 
                                  className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-emerald-100 hover:shadow-emerald-200 transition-all active:scale-95 flex items-center gap-2"
                                >
                                  <Plus size={20}/> {t('addSubject')}
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {tutorSelectedSubjects.length > 0 && (
                        <div className="col-span-1 md:col-span-2 mt-8">
                          <h3 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3"><Video className="text-rose-500" /> {t('demoClass')}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tutorSelectedSubjects.map(item => { 
                              const subId = `${item.level}-${item.subject}`; 
                              return (
                                <div key={subId} className="bg-white/60 backdrop-blur-sm p-6 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-dashed border-white/80 hover:border-emerald-400 transition-all text-center flex flex-col group hover:-translate-y-1">
                                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-4 py-2 rounded-full mb-6 mx-auto tracking-widest uppercase shadow-sm">{t(item.level)} - {t(item.subject)}</span>
                                  <p className="text-[11px] text-slate-500 mb-8 font-medium leading-relaxed italic">{t('videoInstruction')}</p>
                                  <div className="relative mt-auto">
                                    <input type="file" accept="video/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" onChange={(e) => { handleTutorVideoUpload(item, e.target.files[0]); e.target.value = null; }} />
                                    <button className={`w-full py-4 rounded-[1.25rem] text-xs font-black tracking-[0.15em] uppercase flex items-center justify-center gap-3 transition-all ${tutorVideos[subId] ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-100' : 'bg-white/80 text-slate-600 border border-white hover:bg-white shadow-sm hover:shadow-md'}`}>
                                      <UploadCloud size={20} className={tutorVideos[subId] ? 'animate-bounce' : ''} /> 
                                      {tutorVideos[subId] ? 'Published to Feed!' : t('uploadVideo')}
                                    </button>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {!selectedTutor && displayPage === 'findTutor' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl text-white shadow-lg mb-8">
                    <h2 className="text-3xl font-black mb-2 flex items-center gap-2"><Search size={32} /> {t('findTutor')}</h2>
                    <p className="text-white/90 text-lg">{t('findTutorDesc')}</p>
                  </div>

                  {/* Search Filter Bar */}
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-4">
                      <div className="relative md:col-span-2">
                        <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} size={18} />
                        <input type="text" placeholder="Search by name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={`w-full py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none ${dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`} />
                      </div>
                      <div className="relative md:col-span-2">
                        <MapPin className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} size={18} />
                        <input type="text" placeholder="Search location (e.g. Gulshan)" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className={`w-full py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none ${dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`} />
                      </div>
                      <div className="relative md:col-span-3">
                        <School className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} size={18} />
                        <input type="text" placeholder="University name..." value={selectedUniversity} onChange={(e) => setSelectedUniversity(e.target.value)} className={`w-full py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none ${dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`} />
                      </div>
                      <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white outline-none md:col-span-2">
                        <option value="">All Genders</option>
                        <option value="Male">Male Teacher</option>
                        <option value="Female">Female Teacher</option>
                      </select>
                      <select onChange={(e) => handleLevelChange(e.target.value)} value={selectedLevel || ''} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white outline-none md:col-span-2">
                        <option value="">{t('step1')}</option>
                        {Object.keys(curriculumData).map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                      </select>
                      <select disabled={!selectedLevel} onChange={(e) => handleGroupChange(e.target.value)} value={selectedGroup || ''} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none md:col-span-2">
                        <option value="">{t('step2')}</option>
                        {selectedLevel && Object.keys(curriculumData[selectedLevel]).map(grp => <option key={grp} value={grp}>{t(grp)}</option>)}
                      </select>
                      <select disabled={!selectedGroup} onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject || ''} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none md:col-span-1">
                        <option value="">{t('step3')}</option>
                        {selectedLevel && selectedGroup && curriculumData[selectedLevel][selectedGroup].map(sub => <option key={sub} value={sub}>{t(sub)}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={() => { document.getElementById('tutor-results')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex-1 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-md">Search Now</button>
                      <button 
                        onClick={handleFindNearby} 
                        className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all border-2 ${isNearbyActive ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'}`}
                      >
                        {isLocating ? (
                          <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div> {t('detectingLoc')}</span>
                        ) : (
                          <><Navigation size={20} className={isNearbyActive ? 'text-emerald-500' : 'text-slate-400'} /> {t('findNearby')}</>
                        )}
                      </button>
                      <button onClick={() => { setSearchQuery(''); setSelectedLocation(''); setSelectedUniversity(''); setSelectedGender(''); setSelectedLevel(''); setSelectedGroup(''); setSelectedSubject(''); setIsNearbyActive(false); }} className="px-6 py-4 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors">Clear Filters</button>
                    </div>
                  </div>
                  {/* Section 1: Best Rated Matches */}
                  <h3 id="tutor-results" className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2"><Star className="text-amber-500 fill-amber-500" /> {isNearbyActive ? 'Nearby Top Rated' : 'Best Rated Matches'}</h3>
                  {topMatches.length === 0 ? (
                    <div className="py-10 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed mb-10 font-bold">No 4.7+ rated tutors match your criteria.</div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
                      {topMatches.map(tutor => (
                          <div key={tutor.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1" onClick={() => setSelectedTutor(tutor)}>
                            <div className="relative h-32 bg-blue-50"><img src={tutor.image} className="w-full h-full object-cover" /><div className="absolute top-2 right-2 bg-white/90 px-1.5 py-0.5 rounded-lg flex items-center gap-1 text-amber-500 shadow-sm"><Star size={12} fill="currentColor"/><span className="text-xs font-black">{tutor.rating}</span></div></div>
                            <div className="p-4 flex-1 flex flex-col">
                              <h4 className="font-bold text-slate-800 text-sm line-clamp-1 flex items-center gap-1">{tutor.name} {tutor.isVerified && <ShieldCheck size={14} className="text-blue-500 fill-blue-50" />}</h4>
                              <p className="text-[10px] font-bold text-blue-600 mt-1 uppercase">{tutor.subjects.join(', ')}</p>
                              <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400 font-bold"><MapPin size={10} className="text-emerald-500" /> {tutor.distance} {t('kmAway')}</div>
                              <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between"><span className="text-[10px] font-bold text-slate-400 truncate w-24">{tutor.locationName}</span><ChevronRight size={14} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"/></div>
                            </div>
                            </div>
                            ))}
                            </div>
                            )}

                            {/* Section 2: Suggested for You */}
                            <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2"><ThumbsUp className="text-indigo-500" /> {isNearbyActive ? 'Suggested Nearby' : 'Suggested for You'}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pb-20">
                            {suggestions.map(tutor => (
                            <div key={tutor.id} className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer opacity-90 hover:opacity-100" onClick={() => setSelectedTutor(tutor)}>
                            <div className="relative h-28 bg-slate-50"><img src={tutor.image} className="w-full h-full object-cover" /></div>
                            <div className="p-3 flex-1 flex flex-col">
                            <h4 className="font-bold text-slate-700 text-xs line-clamp-1 flex items-center gap-1">{tutor.name} {tutor.isVerified && <ShieldCheck size={12} className="text-blue-500 fill-blue-50" />}</h4>
                            <p className="text-[9px] font-semibold text-slate-400 mt-1">{tutor.subjects[0]} Expert</p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-1 text-slate-400"><Star size={10} fill="currentColor" /><span className="text-[10px] font-bold">{tutor.rating}</span></div>
                              <div className="flex items-center gap-0.5 text-[9px] text-slate-400 font-bold"><MapPin size={10} className="text-emerald-500" /> {tutor.distance}km</div>
                            </div>
                            </div>
                            </div>
                            ))}                    {suggestions.length === 0 && <div className="col-span-full py-12 text-center text-slate-400 font-medium">No suggestions available right now.</div>}
                  </div>
               </div>
            )}

            {!selectedTutor && displayPage === 'demoClasses' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-8 rounded-3xl text-white shadow-lg mb-8">
                    <h2 className="text-3xl font-black mb-2 flex items-center gap-2"><Video size={32} /> {t('allDemoClasses')}</h2>
                    <p className="text-white/90 text-lg">Search by teacher, subject or find tutors near your current location.</p>
                  </div>

                  {/* Demo Search & Location Filter Bar */}
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="relative">
                        <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} size={18} />
                        <input 
                          type="text" 
                          placeholder="Search teacher or title..." 
                          value={videoSearchQuery} 
                          onChange={(e) => setVideoSearchQuery(e.target.value)} 
                          className={`w-full py-3 rounded-xl border border-slate-200 focus:border-rose-500 outline-none ${dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`} 
                        />
                      </div>
                      <select 
                        value={videoLevelFilter} 
                        onChange={(e) => setVideoLevelFilter(e.target.value)} 
                        className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-rose-500 bg-white outline-none"
                      >
                        <option value="">All Levels</option>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                      </select>
                      <select 
                        value={videoSubjectFilter} 
                        onChange={(e) => setVideoSubjectFilter(e.target.value)} 
                        className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-rose-500 bg-white outline-none"
                      >
                        <option value="">All Subjects</option>
                        {Array.from(new Set(Object.values(curriculumData).flatMap(levels => Object.values(levels).flat()))).map(sub => (
                          <option key={sub} value={sub}>{t(sub)}</option>
                        ))}
                      </select>
                      <button 
                        onClick={handleFindNearby} 
                        className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all border-2 ${isNearbyActive ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300'}`}
                      >
                        {isLocating ? (
                          <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <><Navigation size={18} className={isNearbyActive ? 'text-emerald-500' : 'text-slate-400'} /> {t('findNearby')}</>
                        )}
                      </button>
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => { setVideoSearchQuery(''); setVideoLevelFilter(''); setVideoSubjectFilter(''); setIsNearbyActive(false); }} 
                        className="text-slate-500 text-sm font-bold hover:text-rose-500 transition-colors"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  </div>

                  {filteredVideos.length === 0 ? (
                    <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                      <Video size={48} className="mx-auto text-slate-300 mb-4" />
                      <h3 className="text-xl font-bold text-slate-400">No demo classes found.</h3>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
                      {filteredVideos.map(video => (
                        <div key={video.id} className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group cursor-pointer" onClick={() => setActiveVideoModal(video)}>
                          <div className="relative h-44 bg-slate-900">
                            <img src={video.thumbnail} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <PlayCircle size={56} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-xl" />
                            </div>
                            <span className="absolute top-3 left-3 bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm uppercase">{t(video.subject)}</span>
                            {isNearbyActive && (
                              <span className="absolute bottom-3 left-3 bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                                <MapPin size={10} /> {video.tutorDistance} km
                              </span>
                            )}
                            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-black px-2 py-0.5 rounded shadow-sm">{video.level}</span>
                          </div>
                          <div className="p-5 flex-1 flex flex-col">
                            <h4 className="font-bold text-slate-800 line-clamp-2 text-lg leading-tight mb-2 group-hover:text-rose-600 transition-colors">{video.title}</h4>
                            <p className="text-sm font-semibold text-slate-500 mb-4 hover:text-blue-600 hover:underline cursor-pointer w-max transition-colors flex items-center gap-1" onClick={(e) => { e.stopPropagation(); const tutor = mockTutors.find(t => t.id === video.tutorId); if(tutor) { setSelectedTutor(tutor); window.scrollTo(0,0); } }}>{video.tutorName} {mockTutors.find(t => t.id === video.tutorId)?.isVerified && <ShieldCheck size={14} className="text-blue-500 fill-blue-50" />}</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">                              <div className="flex items-center gap-3 text-slate-500 text-[11px] font-bold">
                                <span className="flex items-center gap-1"><Heart size={14} className="text-rose-500 fill-rose-500" /> {(video.reactionsLove||0)}</span>
                                <span className="flex items-center gap-1"><ThumbsUp size={14} className="text-emerald-500 fill-emerald-500" /> {(video.reactionsGood||0)}</span>
                                <span className="flex items-center gap-1"><ThumbsUp size={14} className="text-slate-400 fill-slate-400 rotate-180" /> {(video.reactionsNotGood||0)}</span>
                              </div>
                              <span className="text-rose-600 font-bold text-sm">Watch Now</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
               </div>
            )}

            {!selectedTutor && displayPage === 'bookings' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-3xl text-white shadow-lg mb-8">
                    <h2 className="text-3xl font-black mb-2 flex items-center gap-2"><CheckSquare size={32} /> {t('myBookings')}</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredBookings.map(b => (
                      <div key={b.id} className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 transition-all hover:shadow-lg">
                         <div className="flex items-center gap-4 mb-4"><img src={b.image} className="w-12 h-12 rounded-full"/><h4 className="font-bold">{b.tutorName}</h4></div>
                         <p className="text-sm">Subject: {b.subject}</p>
                         <p className="text-sm">Status: <span className="font-bold uppercase text-xs">{b.status}</span></p>
                      </div>
                    ))}
                  </div>
               </div>
            )}
            
            {!selectedTutor && (displayPage === 'requests' || displayPage === 'messages') && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {!hasMembership ? (
                    <div className="bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-white/50 text-center max-w-2xl mx-auto mt-12 relative overflow-hidden">
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-mesh"></div>
                      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-mesh" style={{ animationDelay: '-5s' }}></div>

                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber-200 rotate-6 hover:rotate-0 transition-transform duration-500"><Lock size={48} /></div>
                        <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">{t('premiumRequired') || 'Premium Required'}</h2>
                        <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">Unlock incoming tuition requests and direct messages from students. Build your professional teaching career today.</p>

                        <div className="bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border border-white/60 mb-10 text-left shadow-inner">
                           <h3 className="font-black text-slate-800 mb-6 text-center uppercase tracking-widest text-xs">Select Payment Method (৳999/mo)</h3>
                           <div className="grid grid-cols-2 gap-4">
                              <button onClick={() => { alert('bKash Payment Successful!'); setHasMembership(true); }} className="p-5 bg-white rounded-2xl border border-white hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100/50 transition-all flex flex-col items-center justify-center gap-3 group"><span className="font-black text-pink-600 text-lg group-hover:scale-110 transition-transform">bKash</span><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay ৳999</span></button>
                              <button onClick={() => { alert('Nagad Payment Successful!'); setHasMembership(true); }} className="p-5 bg-white rounded-2xl border border-white hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 transition-all flex flex-col items-center justify-center gap-3 group"><span className="font-black text-orange-600 text-lg group-hover:scale-110 transition-transform">Nagad</span><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay ৳999</span></button>
                              <button onClick={() => { alert('Rocket Payment Successful!'); setHasMembership(true); }} className="p-5 bg-white rounded-2xl border border-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 transition-all flex flex-col items-center justify-center gap-3 group"><span className="font-black text-purple-600 text-lg group-hover:scale-110 transition-transform">Rocket</span><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay ৳999</span></button>
                              <button onClick={() => { alert('Card Payment Successful!'); setHasMembership(true); }} className="p-5 bg-white rounded-2xl border border-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 transition-all flex flex-col items-center justify-center gap-3 group"><span className="font-black text-indigo-600 flex items-center gap-2 group-hover:scale-110 transition-transform leading-tight text-center"><CreditCard size={18}/> Visa/Master</span><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pay ৳999</span></button>
                           </div>
                        </div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Secure local payment • Instant activation</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {displayPage === 'requests' && (
                        <div>
                          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-emerald-100 mb-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                            <h2 className="text-4xl font-black mb-2 flex items-center gap-4 relative z-10"><Briefcase size={40} /> Tuition Requests</h2>
                            <p className="text-emerald-50 text-lg font-medium relative z-10">Manage and respond to new opportunities.</p>
                          </div>
                          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
                             {tutorRequests.length === 0 ? (
                               <div className="text-center py-20 text-slate-400 font-black border-2 border-dashed border-white/80 rounded-[2rem] uppercase tracking-widest text-sm">No incoming tuition requests yet.</div>
                             ) : (
                               <div className="grid gap-6">
                                 {tutorRequests.map(req => (
                                   <div key={req.id} className="flex flex-col sm:flex-row justify-between items-center p-6 rounded-3xl border border-white bg-white/40 hover:bg-white/80 hover:shadow-xl hover:shadow-indigo-100/30 transition-all duration-300 group">
                                     <div className="flex items-center gap-5 mb-4 sm:mb-0 w-full sm:w-auto">
                                       <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner">{req.studentName.charAt(0)}</div>
                                       <div><h4 className="font-black text-xl text-slate-800">{req.studentName}</h4><p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{req.level} • {req.subject}</p></div>
                                     </div>
                                     <div className="flex gap-4 w-full sm:w-auto">
                                       <button onClick={() => setTutorRequests(prev => prev.filter(r => r.id !== req.id))} className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3.5 rounded-2xl font-black shadow-lg shadow-emerald-100 transition-all active:scale-95">Accept</button>
                                       <button onClick={() => setTutorRequests(prev => prev.filter(r => r.id !== req.id))} className="flex-1 sm:flex-none bg-white text-rose-500 border border-white hover:border-rose-100 hover:bg-rose-50 px-8 py-3.5 rounded-2xl font-black transition-all active:scale-95 shadow-sm">Decline</button>
                                       <button onClick={() => setReportModalData({ userId: req.id, name: req.studentName, role: 'Student' })} className="flex-none py-3.5 px-5 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all border border-red-100 hover:shadow-md shadow-sm" title="Report Student"><AlertCircle size={20}/></button>
                                     </div>                                   </div>
                                 ))}
                               </div>
                             )}
                          </div>
                        </div>
                      )}

                      {displayPage === 'messages' && (
                        <div className="relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden h-[700px] flex">
                          <div className={`w-full md:w-80 border-r border-white/50 flex flex-col bg-white/30 ${activeChat ? 'hidden md:flex' : 'flex'}`}>
                             <div className="p-6 border-b border-white/50 bg-white/50 backdrop-blur-md font-black text-slate-800 flex items-center gap-3 text-xl tracking-tight leading-none"><MessageSquare className="text-indigo-600" size={24}/> {t('messages')}</div>
                             <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                               {mockChats.map(chat => (
                                 <button key={chat.id} onClick={() => setActiveChat(chat)} className={`w-full text-left p-4 rounded-3xl transition-all duration-300 flex items-center gap-4 ${activeChat?.id === chat.id ? 'bg-white shadow-xl shadow-indigo-100/50 scale-[1.02] border border-indigo-100' : 'hover:bg-white/60 border border-transparent'}`}>
                                   <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-600 font-black text-xl rounded-2xl flex items-center justify-center shrink-0 shadow-inner">{chat.name.charAt(0)}</div>
                                   <div className="flex-1 overflow-hidden"><h4 className="font-black text-slate-800 text-sm truncate">{chat.name}</h4><p className="text-[11px] text-slate-400 font-bold truncate mt-1 leading-none uppercase tracking-widest">{chat.lastMessage}</p></div>
                                   {chat.unread > 0 && <span className="bg-rose-500 text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full shrink-0 shadow-lg shadow-rose-100">{chat.unread}</span>}
                                 </button>
                               ))}
                             </div>
                          </div>
                          <div className={`flex-1 flex flex-col bg-white/20 backdrop-blur-sm ${!activeChat ? 'hidden md:flex' : 'flex'}`}>
                             {activeChat ? (
                               <>
                                 <div className="p-5 bg-white/80 backdrop-blur-md border-b border-white/50 flex items-center gap-4 shadow-sm z-10 relative">
                                   <button onClick={() => setActiveChat(null)} className="md:hidden p-2 text-slate-500 hover:bg-white rounded-xl bg-white/50 transition-all"><ChevronLeft size={24}/></button>
                                   <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-black text-lg rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100">{activeChat.name.charAt(0)}</div>
                                   <div><h4 className="font-black text-slate-800 leading-none">{activeChat.name}</h4><p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1">Online Now</p></div>
                                 </div>
                                 <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent">
                                   <div className="flex flex-col items-center justify-center h-full text-slate-400 text-center">
                                     <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4"><MessageSquare size={32} className="text-slate-300"/></div>
                                     <p className="italic font-bold text-sm">Start your professional conversation with {activeChat.name.split(' ')[0]}.</p>
                                   </div>
                                 </div>
                                 <div className="p-6 bg-white/80 backdrop-blur-md border-t border-white/50">
                                   <div className="flex gap-4 items-center bg-white p-2 rounded-[1.5rem] shadow-xl shadow-indigo-100/20 border border-indigo-50">
                                     <input type="text" placeholder={t('typeMessage')} className="flex-1 bg-transparent px-4 py-3 outline-none font-bold text-sm text-slate-700"/>
                                     <button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-4 rounded-2xl shadow-lg shadow-indigo-200 hover:scale-110 active:scale-95 transition-all"><Send size={20}/></button>
                                   </div>
                                 </div>
                               </>
                             ) : (
                               <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-12 text-center">
                                  <div className="w-24 h-24 bg-white/60 rounded-[2rem] flex items-center justify-center mb-8 shadow-glass border border-white/50 animate-float-slow"><MessageCircle size={48} className="text-indigo-200" /></div>
                                  <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">Your Professional Inbox</h3>
                                  <p className="text-sm font-medium text-slate-500 max-w-xs leading-relaxed">Select a conversation from the list to view your messages and reply to students.</p>
                               </div>
                             )}
                          </div>
                        </div>
                      )}
                    </>
                  )}
               </div>
            )}
            {!selectedTutor && displayPage === 'support' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-orange-100 mb-10"><h2 className="text-4xl font-black mb-2 flex items-center gap-4"><HelpCircle size={40} /> {t('supportTitle')}</h2><p className="text-orange-50 text-lg font-medium">We are here 24/7 to help you.</p></div>
                  <div className="bg-white/60 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 text-center">
                    <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner"><Mail size={32} /></div>
                    <h3 className="text-2xl font-black text-slate-800 mb-2">Contact Professional Support</h3>
                    <p className="text-slate-500 font-bold mb-8">Email: support@tuitionhub.com</p>
                    <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-orange-100 transition-all active:scale-95">Send a Message</button>
                  </div>
               </div>
            )}

            {!selectedTutor && displayPage === 'reportTeacher' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-red-500 to-rose-600 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-red-100 mb-10">
                    <h2 className="text-4xl font-black mb-2 flex items-center gap-4"><ShieldAlert size={40} /> {t('reportTeacher')}</h2>
                    <p className="text-red-50 text-lg font-medium">Submit a complaint or report a teacher. We take this seriously.</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
                    <div className="max-w-2xl mx-auto space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Select Teacher to Report</label>
                        <select className="w-full py-4 px-5 rounded-2xl border border-slate-200 focus:border-red-500 bg-white outline-none">
                          <option value="">-- Choose a teacher --</option>
                          {mockTutors.slice(0,15).map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Reason for Report</label>
                        <select className="w-full py-4 px-5 rounded-2xl border border-slate-200 focus:border-red-500 bg-white outline-none">
                          <option value="">-- Select reason --</option>
                          <option value="unprofessional">Unprofessional Behavior</option>
                          <option value="absent">Frequently Absent</option>
                          <option value="harassment">Harassment or Abuse</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Detailed Description</label>
                        <textarea rows="5" className="w-full p-5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-red-500 transition-all font-medium resize-none" placeholder="Please provide specific details about the incident..."></textarea>
                      </div>
                      <button onClick={() => { alert('Report submitted successfully. Our admin team will review it shortly.'); setActivePage('dashboard'); window.scrollTo(0,0); }} className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-red-100 hover:-translate-y-1 active:scale-95 transition-all">Submit Report</button>
                    </div>
                  </div>
               </div>
            )}            
            {!selectedTutor && displayPage === 'updateProfile' && (
               <div className="bg-white/60 backdrop-blur-md p-10 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] animate-in fade-in zoom-in-95 max-w-4xl mx-auto border border-white/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8 border-b border-white/50 pb-6">
                      <h3 className="text-4xl font-black text-slate-800 tracking-tight flex items-center gap-4">
                        <User size={40} className={roleConfig[role].text} /> {t('updateProfile')}
                      </h3>
                      <span className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${roleConfig[role].bgLight} ${roleConfig[role].text} border border-white/50`}>
                        {roleConfig[role].label}
                      </span>
                    </div>

                    {/* Progression Bar */}
                    <div className="mb-12 bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border border-white/60 shadow-inner">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t('profileProgress')}</span>
                        <span className={`text-2xl font-black ${profileProgress === 100 ? 'text-emerald-600' : 'text-indigo-600'}`}>{profileProgress}%</span>
                      </div>
                      <div className="w-full h-5 bg-white/50 rounded-full overflow-hidden shadow-inner border border-white/40 p-1">
                        <div 
                          className={`h-full transition-all duration-1000 ease-out rounded-full shadow-lg ${profileProgress === 100 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-indigo-400 to-violet-600'}`} 
                          style={{ width: `${profileProgress}%` }}
                        ></div>
                      </div>
                      <p className="mt-4 text-xs font-black text-slate-400 italic tracking-wide uppercase">
                        {profileProgress < 100 ? 'Complete your profile to increase trust and visibility.' : 'Great job! Your profile is 100% complete.'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Basic Info (Common) */}
                      <div className="space-y-8">
                        <h4 className="font-black text-slate-400 uppercase text-[10px] tracking-[0.3em] mb-4 flex items-center gap-2"><div className="w-8 h-[2px] bg-slate-200"></div> Personal Info</h4>
                        <div className="group">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">{t('name')}</label>
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-4 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner font-bold text-slate-700" />
                        </div>
                        <div className="group">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">{t('email')}</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-4 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner font-bold text-slate-700" />
                        </div>
                        <div className="group">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">{t('mobile')}</label>
                          <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} className="w-full p-4 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner font-bold text-slate-700" />
                        </div>
                        <div className="group">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">{t('address')}</label>
                          <textarea name="address" value={formData.address} onChange={handleInputChange} rows="3" className="w-full p-4 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner font-bold text-slate-700 resize-none"></textarea>
                        </div>
                      </div>

                      {/* Role Specific Info */}
                      <div className="space-y-8">
                        <h4 className="font-black text-slate-400 uppercase text-[10px] tracking-[0.3em] mb-4 flex items-center gap-2"><div className="w-8 h-[2px] bg-slate-200"></div> Professional Details</h4>
                      
                      {role === 'tutor' && (
                        <>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('university')}</label>
                            <input type="text" name="university" value={tutorProfile.university} onChange={(e) => handleProfileChange(e, setTutorProfile)} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 transition-all font-medium" />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('experience')}</label>
                            <input type="text" name="prevTuitions" value={tutorProfile.prevTuitions} onChange={(e) => handleProfileChange(e, setTutorProfile)} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 transition-all font-medium" />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('askingPrice')}</label>
                            <input type="text" name="askingPrice" value={tutorProfile.askingPrice} onChange={(e) => handleProfileChange(e, setTutorProfile)} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 transition-all font-medium" />
                          </div>
                        </>
                      )}

                      {(role === 'student' || role === 'guardian') && (
                        <>
                          <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">{t('institution')}</label>
                            <input type="text" name="institution" value={studentProfile.institution} onChange={(e) => handleProfileChange(e, setStudentProfile)} className="w-full p-4 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white transition-all shadow-inner font-bold text-slate-700" />
                          </div>
                        </>
                      )}

                      <div className="bg-white/40 backdrop-blur-sm p-8 rounded-[2rem] border-2 border-dashed border-white/60 text-center shadow-inner">
                        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-slate-100 shadow-sm">
                          <UploadCloud size={32} className="text-slate-300" />
                        </div>
                        <p className="text-xs font-bold text-slate-500 mb-4">{t('profilePic')}</p>
                        <button className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${roleConfig[role].color} text-white`}>Upload Photo</button>
                      </div>
                    </div>
                  </div>

                  {/* AI Security Verification Section */}
                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-black text-slate-800 flex items-center gap-2 uppercase tracking-tight"><ShieldCheck className="text-blue-600" /> {t('verificationTitle')}</h4>
                      {verificationStep === 'verified' && <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1"><CheckCircle2 size={12}/> Verified by AI</span>}
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-inner">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Step 1: ID Card (OCR)</p>
                           <div className="relative h-40 bg-white rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden shadow-sm group hover:border-blue-300 transition-colors">
                              {idFront ? (
                                <img src={URL.createObjectURL(idFront)} className="w-full h-full object-cover" />
                              ) : (
                                <><IdCard size={32} className="text-slate-300 mb-2 group-hover:scale-110 transition-transform" /><p className="text-[10px] font-bold text-slate-400">Upload ID Front</p></>
                              )}
                              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setIdFront(e.target.files[0])} />
                           </div>
                           <button 
                             onClick={runSecurityVerification} 
                             disabled={isVerifying || verificationStep === 'verified' || !idFront}
                             className={`w-full py-3.5 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all shadow-lg ${!idFront || isVerifying || verificationStep === 'verified' ? 'bg-slate-100 text-slate-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-0.5 active:scale-95'}`}
                           >
                             {isVerifying && verificationStep === 'scanning' ? (
                               <span className="flex items-center justify-center gap-2"><div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div> {t('verifying')}</span>
                             ) : t('startOcr')}
                           </button>
                        </div>

                        <div className={`space-y-4 transition-opacity duration-500 ${verificationStep === 'none' && !isVerifying ? 'opacity-40' : 'opacity-100'}`}>
                           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Step 2: Live Selfie</p>
                           <div className="relative h-40 bg-white rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden shadow-sm group hover:border-indigo-300 transition-colors">
                              {selfiePhoto ? (
                                <img src={URL.createObjectURL(selfiePhoto)} className="w-full h-full object-cover" />
                              ) : (
                                <><User size={32} className="text-slate-300 mb-2 group-hover:scale-110 transition-transform" /><p className="text-[10px] font-bold text-slate-400">Take Live Selfie</p></>
                              )}
                              <input type="file" capture="user" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setSelfiePhoto(e.target.files[0])} />
                           </div>
                           <button disabled className="w-full py-3 rounded-xl text-xs font-black bg-slate-200 text-slate-400 uppercase">{t('takeSelfie')}</button>
                        </div>

                        <div className="space-y-4">
                           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">AI Status</p>
                           <div className="h-40 bg-white rounded-2xl border border-slate-200 p-4 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
                              {verificationStep === 'none' && !isVerifying && <><AlertCircle size={32} className="text-slate-200 mb-2" /><p className="text-xs font-black text-slate-300 uppercase">Awaiting ID...</p></>}
                              {isVerifying && (
                                <div className="flex flex-col items-center gap-4 animate-in zoom-in-95">
                                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                  <div className="space-y-1">
                                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest animate-pulse">{verificationStep === 'scanning' ? t('ocrProcess') : t('faceMatchProcess')}</p>
                                    <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden mx-auto"><div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_infinite]"></div></div>
                                  </div>
                                </div>
                              )}
                              {verificationStep === 'verified' && (
                                <div className="animate-in slide-in-from-bottom-2 duration-500">
                                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner"><CheckCircle2 size={32} /></div>
                                  <p className="text-sm font-black text-emerald-600">{t('faceMatchSuccess')}</p>
                                  <div className="mt-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100"><p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Extracted Identity</p><p className="text-xs font-bold text-slate-700">{ocrData.idNumber}</p></div>
                                </div>
                              )}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/50 flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => { 
                        setIsProfileComplete(true); 
                        alert(t('profileUpdatedAlert')); 
                        setActivePage('dashboard'); 
                        window.scrollTo(0,0); 
                      }} 
                      className={`flex-1 py-5 text-white rounded-[1.25rem] font-black text-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-indigo-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 ${roleConfig[role].color}`}
                    >
                      <CheckCircle2 size={24}/>
                      {t('saveProfile')}
                    </button>
                    <button 
                      onClick={() => { setActivePage('dashboard'); window.scrollTo(0,0); }} 
                      className="px-10 py-5 bg-white/40 text-slate-400 rounded-[1.25rem] font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-600 border border-white/60 transition-all active:scale-95"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
               </div>
            )}

            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-slate-500"><GraduationCap size={24} className="text-slate-400" /><span className="font-bold text-slate-700">Tuition Hub &copy; {new Date().getFullYear()}</span></div>
              </div>
            </div>

          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans text-slate-800 overflow-hidden" dir={dir}>
      <FloatingBackground />
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden transition-all duration-300">
        <div className="flex border-b border-white/50">
          <button className={`flex-1 py-5 font-black text-sm uppercase tracking-widest transition-all ${!isLogin ? 'text-indigo-600 border-b-2 border-indigo-600 bg-white/40' : 'text-slate-400 hover:text-slate-600'}`} onClick={() => setIsLogin(false)}>{t('signUp')}</button>
          <button className={`flex-1 py-5 font-black text-sm uppercase tracking-widest transition-all ${isLogin ? 'text-indigo-600 border-b-2 border-indigo-600 bg-white/40' : 'text-slate-400 hover:text-slate-600'}`} onClick={() => setIsLogin(true)}>{t('logIn')}</button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Tuition Hub</h1>
            <p className="text-slate-500 font-medium mt-1">{isLogin ? 'Welcome back!' : 'Join our community'}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {['student', 'tutor', 'admin'].map(r => (
              <button key={r} onClick={() => { setRole(r); setOtpStep(false); }} className={`flex flex-col items-center justify-center p-4 rounded-3xl border-2 transition-all duration-300 ${role === r ? 'border-indigo-500 bg-indigo-50/50 text-indigo-700 shadow-lg shadow-indigo-100 scale-105' : 'border-white bg-white/50 text-slate-400 hover:border-slate-100 hover:bg-white'}`}>
                {r === 'student' ? <GraduationCap size={24} /> : r === 'tutor' ? <BookOpen size={24} /> : <ShieldCheck size={24} />}
                <span className="text-[10px] font-black uppercase mt-2 tracking-widest">{r}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input type="text" name="name" placeholder={t('name')} required value={formData.name} onChange={handleInputChange} className="w-full pl-11 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white/80 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" />
              </div>
            )}
            
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input type="email" name="email" placeholder={t('email')} required value={formData.email} onChange={handleInputChange} className="w-full pl-11 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white/80 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input type="password" name="password" placeholder={t('password')} required value={formData.password} onChange={handleInputChange} className="w-full pl-11 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl outline-none focus:border-indigo-400 focus:bg-white/80 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" />
            </div>

            {otpStep && (role === 'admin' || role === 'superAdmin') && (
              <div className="relative animate-in slide-in-from-top-2">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                <input type="text" placeholder="Enter OTP (1234)" required value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full pl-11 pr-4 py-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl outline-none focus:border-emerald-500 transition-all shadow-inner font-bold text-emerald-800" />
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-200/50 hover:from-indigo-700 hover:to-violet-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 mt-6">
              {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : (isLogin ? t('loginBtn') : t('createBtn'))}
            </button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-[--shadow-glass]">
        <Globe size={14} className="text-indigo-500" />
        {selectedLanguage}
      </div>
    </div>
  );
}
