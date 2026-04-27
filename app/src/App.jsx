import React, { useState, useRef, useEffect } from 'react';
import { Mail, Lock, User, Phone, MapPin, GraduationCap, Users, BookOpen, ArrowRight, Menu, X, LogOut, Globe, Grid, HelpCircle, FileText, Search, ChevronRight, ChevronLeft, Beaker, Briefcase, Palette, Star, AlertCircle, Building2, Calendar, CheckSquare, Award, IdCard, UploadCloud, MessageSquare, Video, Plus, Trash2, PlayCircle, Bell, Heart, ThumbsUp, Send, ShieldAlert, MessageCircle, Navigation, Clock, ShieldCheck, CreditCard, Activity, Key, Settings, Server, BarChart3, CheckCircle2 } from 'lucide-react';

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
    supportTitle: 'Support System', supportDesc: 'We are here 24/7.', contactAdmin: 'Message Admin', subjectLabel: 'Subject', messageLabel: 'Message', sendMsgBtn: 'Send', contactInfo: 'Contact Info', followUs: 'Follow Us',
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
    supportTitle: 'সাপোর্ট', supportDesc: 'আমরা ২৪/৭ আপনার সাথে আছি।', contactAdmin: 'মেসেজ দিন', subjectLabel: 'বিষয়', messageLabel: 'মেসেজ', sendMsgBtn: 'পাঠান', contactInfo: 'যোগাযোগ', followUs: 'ফলো করুন',
    findNearby: 'নিকটবর্তী শিক্ষক খুঁজুন', detectingLoc: 'লোকেশন শনাক্ত হচ্ছে...', kmAway: 'কিমি দূরে',
    bookMe: 'টিউশন রিকোয়েস্ট', moreDetails: 'বিস্তারিত', currentUniversity: 'বর্তমান বিশ্ববিদ্যালয়', achievementsLife: 'পুরস্কার', messageTutor: 'মেসেজ দিন',
    myBookings: 'আমার টিউশন', pending: 'অপেক্ষমান', accepted: 'সক্রিয়', totalEarnings: 'মোট আয়', activeStudents: 'সক্রিয় শিক্ষার্থী', reqActions: 'পদক্ষেপ', accept: 'গ্রহণ', decline: 'বাতিল', currentBookings: 'বর্তমান টিউশন', suggestedTutors: 'প্রস্তাবিত শিক্ষক',
    profileIncomplete: 'প্রোফাইল অসম্পূর্ণ।', availableSlots: 'পছন্দের সময়সূচী', selectSlot: 'সময় নির্বাচন', confirmBooking: 'নিশ্চিত করুন', institution: 'প্রতিষ্ঠানের নাম', guardianName: 'অভিভাবকের নাম', guardianPhone: 'অভিভাবকের ফোন', profileProgress: 'প্রোফাইল সম্পন্ন',
    fathersName: "পিতার নাম", mothersName: "মাতার নাম", birthYear: "জন্ম সাল", nidNumber: "এনআইডি নম্বর", parentsProfession: "পিতা-মাতার পেশা", childInfo: "সন্তানের তথ্য", profession: "পেশা", profilePic: "প্রোফাইল ছবি", uploadCv: "সিভি আপলোড", askingPrice: "পারিশ্রমিক/মাস", uniRankLink: "বিশ্ববিদ্যালয়ের র‍্যাঙ্ক", approvePayment: "পেমেন্ট করুন", verifyUsers: "ইউজার যাচাই", adminDashboard: "অ্যাডমিন ড্যাশবোর্ড", pendingVerifications: "অপেক্ষমান যাচাইকরণ", adminId: "অ্যাডমিন আইডি", otpSentMsg: "OTP পাঠানো হয়েছে!", locRequired: "লোকেশন বাধ্যতামূলক।", verifyOtpBtn: "OTP যাচাই", adminUsers: "ব্যবহারকারী পরিচালনা", adminPayments: "লেনদেনসমূহ", adminReports: "রিপোর্ট", sysSettings: "সিস্টেম সেটিংস", serverMgmt: "সার্ভার পরিচালনা", cancelReq: "বাতিল"
  }
};

const supportedLanguages = ['UK English', 'Bangla (বাংলা)', 'Hindi (हिन्दी)', 'Urdu (اردو)', 'Tamil (தமிழ்)'];

// ==========================================
// 2. PROGRAMMATIC MOCK DATA GENERATION
// ==========================================
const curriculumData = {
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
  const level = Math.random() > 0.5 ? 'SSC' : 'HSC';
  const group = ['Science', 'Arts', 'Commerce'][Math.floor(Math.random() * 3)];
  const subjectsForGroup = curriculumData[level][group];
  const s1 = subjectsForGroup[Math.floor(Math.random() * subjectsForGroup.length)];
  const s2 = subjectsForGroup[Math.floor(Math.random() * subjectsForGroup.length)];
  
  return {
    id: i + 1,
    name: generateName(),
    rating: (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    subjects: Array.from(new Set([s1, s2])),
    subjectData: [
      { level, group, subject: s1 },
      { level, group, subject: s2 }
    ],
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher${i}&backgroundColor=b6e3f4`,
    bio: 'Dedicated educator with a passion for helping students succeed...',
    experience: `${Math.floor(Math.random() * 10) + 1} Years`,
    education: `BSc in ${s1}, ${unis[Math.floor(Math.random() * unis.length)]}`,
    rate: `৳${(Math.floor(Math.random() * 5) + 3) * 1000}/mo`,
    demoVideoId: `v${i + 1}`,
    distance: (Math.random() * 10).toFixed(1),
    locationName: `${areas[Math.floor(Math.random() * areas.length)]}, Dhaka`,
    university: unis[Math.floor(Math.random() * unis.length)],
    achievements: 'Top rated educator on the platform.',
    slots: ['Sat-Mon-Wed 10:00 AM', 'Sun-Tue-Thu 04:00 PM']
  };
});

const initialVideos = mockTutors.slice(0, 1000).map((tutor, i) => ({
  id: `v${i + 1}`,
  tutorId: tutor.id,
  tutorName: tutor.name,
  subject: tutor.subjects[0],
  title: `Mastering ${tutor.subjects[0]} - Session ${i + 1}`,
  thumbnail: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400&h=250`,
  rating: tutor.rating,
  reactions: Math.floor(Math.random() * 100),
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
const FloatingBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <style>{`@keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }`}</style>
    <div className="absolute top-10 left-10 opacity-30" style={{ animation: 'float 7s infinite ease-in-out' }}><BookOpen size={48} className="text-blue-500" /></div>
    <div className="absolute bottom-20 right-20 opacity-20" style={{ animation: 'float 6s infinite ease-in-out' }}><GraduationCap size={56} className="text-indigo-600" /></div>
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
  const [adminLoc, setAdminLoc] = useState(null);

  // Admin Data States
  const [adminPendingUsers, setAdminPendingUsers] = useState(mockAdminUsers);
  const [adminAllUsers, setAdminAllUsers] = useState(mockAllUsers);
  const [transactions, setTransactions] = useState(mockTransactions);

  const [activePage, setActivePage] = useState('dashboard');
  const [selectedLevel, setSelectedLevel] = useState(''); 
  const [selectedGroup, setSelectedGroup] = useState(''); 
  const [selectedSubject, setSelectedSubject] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTutor, setSelectedTutor] = useState(null); 
  const [activeVideoModal, setActiveVideoModal] = useState(null); 
  const [newCommentText, setNewCommentText] = useState('');
  
  const [studentBookings, setStudentBookings] = useState([
    { id: 101, tutorName: 'Rafiqul Islam', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rafiq&backgroundColor=b6e3f4', subject: 'Physics', status: 'accepted', date: 'Sat-Mon-Wed 10:00 AM', rate: '৳5000/mo' }
  ]);
  const [bookingFilter, setBookingFilter] = useState('all');
  const [bookingModalTutor, setBookingModalTutor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [paymentModalData, setPaymentModalData] = useState(null);

  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [tutorProfile, setTutorProfile] = useState({ certName: '', homeAddress: '', currentAddress: '', varsityMail: '', university: '', prevTuitions: '', achievements: '', askingPrice: '', uniRankLink: '', profilePic: null, cvFile: null, agreeTerms: false });
  const [studentProfile, setStudentProfile] = useState({ fullName: '', email: '', mobile: '', address: '', institution: '', profilePic: null });
  const [parentProfile, setParentProfile] = useState({ fullName: '', email: '', mobile: '', address: '', childSubjects: '', profilePic: null });
  
  const [tutorSelectedSubjects, setTutorSelectedSubjects] = useState([]);
  const [tutorVideos, setTutorVideos] = useState({});
  const [hasMembership, setHasMembership] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [tutorRequests, setTutorRequests] = useState([{ id: 201, studentName: 'Fahim Rahman', subject: 'Higher Math', level: 'HSC', status: 'pending' }]);

  const [isNearbyActive, setIsNearbyActive] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [tutorNotifs, setTutorNotifs] = useState([
    { id: 1, text: 'New comment on your Physics video!', unread: true, videoId: 'v1' },
    { id: 2, text: 'A student requested a tuition.', unread: true }
  ]);

  const [idType, setIdType] = useState('studentId');
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);

  const roleConfig = {
    student: { icon: <GraduationCap size={16} />, label: t('student'), color: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500', bgLight: 'bg-blue-50', message: t('msgStudent') },
    guardian: { icon: <Users size={16} />, label: t('guardian'), color: 'bg-indigo-500', text: 'text-indigo-500', border: 'border-indigo-500', bgLight: 'bg-indigo-50', message: t('msgGuardian') },
    tutor: { icon: <BookOpen size={16} />, label: t('tutor'), color: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', bgLight: 'bg-emerald-50', message: t('msgTutor') },
    admin: { icon: <ShieldCheck size={16} />, label: t('admin'), color: 'bg-slate-800', text: 'text-slate-800', border: 'border-slate-800', bgLight: 'bg-slate-100', message: t('msgAdmin') },
    superAdmin: { icon: <Server size={16} />, label: t('superAdmin'), color: 'bg-rose-700', text: 'text-rose-700', border: 'border-rose-700', bgLight: 'bg-rose-50', message: t('msgSuperAdmin') }
  };

  // --- SMART SEARCH & SUGGESTION LOGIC ---
  const getSearchResults = () => {
    const allMatches = [...mockTutors].filter(t => {
      const nameMatch = searchQuery ? t.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      if (!nameMatch) return false;

      // If no filters, everyone matches the name search
      if (!selectedLevel && !selectedGroup && !selectedSubject) return true;

      // Level/Group/Subject matching
      return t.subjectData.some(s => {
        const levelMatch = selectedLevel ? s.level === selectedLevel : true;
        const groupMatch = selectedGroup ? s.group === selectedGroup : true;
        const subjectMatch = selectedSubject ? s.subject === selectedSubject : true;
        return levelMatch && groupMatch && subjectMatch;
      });
    });

    // 1. Best Rated Matches (Exact matches, Rating >= 4.7)
    const topMatches = allMatches
      .filter(t => parseFloat(t.rating) >= 4.7)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);

    // 2. Suggestions (Same subject different level, or lower rated exact matches)
    const exactIds = new Set(topMatches.map(t => t.id));
    
    const otherMatches = allMatches.filter(t => !exactIds.has(t.id));
    
    const sameSubjectDiffLevel = mockTutors.filter(t => {
      if (exactIds.has(t.id)) return false;
      if (!selectedSubject) return false;
      return t.subjects.includes(selectedSubject) && !allMatches.find(m => m.id === t.id);
    });

    const suggestions = [...otherMatches, ...sameSubjectDiffLevel]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 15);

    return { topMatches, suggestions };
  };

  const { topMatches, suggestions } = getSearchResults();

  const filteredBookings = studentBookings.filter(b => bookingFilter === 'all' || b.status === bookingFilter);

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

  const handleTutorProfileChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setTutorProfile(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if ((role === 'admin' || role === 'superAdmin') && !otpStep) {
      if (!navigator.geolocation) { alert("Geolocation not supported."); setIsSubmitting(false); return; }
      
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setAdminLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setTimeout(() => { setOtpStep(true); setIsSubmitting(false); alert(t('otpSentMsg')); }, 1000);
        },
        () => { 
          setAdminLoc({ lat: 23.8103, lng: 90.4125 });
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

  const calculateProfileProgress = (profileObj) => {
    const fields = Object.values(profileObj);
    const filled = fields.filter(f => f && (typeof f !== 'string' || f.trim() !== '')).length;
    return Math.round((filled / fields.length) * 100);
  };

  const handleInitiateBooking = (tutor) => {
    const progress = role === 'student' ? calculateProfileProgress(studentProfile) : calculateProfileProgress(parentProfile);
    if (progress < 80) {
      alert(`${t('profileIncomplete')} (${progress}%)`);
      setActivePage('updateProfile'); setSelectedTutor(null);
    } else { setBookingModalTutor(tutor); }
  };

  const handleConfirmBooking = () => {
    if(!selectedSlot) return alert(t('selectSlot'));
    setStudentBookings(prev => [{ 
      id: Date.now(), 
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
    const newVid = { id: `v_${Date.now()}`, tutorId: 99, tutorName: formData.name || 'New Teacher', subject: item.subject, title: `${item.level} ${item.subject} Video Tutorial`, thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', rating: 0, reactions: 0, comments: [] };
    setGlobalVideos(prev => [newVid, ...prev]);
  };

  const handlePostComment = () => {
    if(!newCommentText.trim()) return;
    if (role === 'tutor' && hasForbiddenContent(newCommentText)) return alert(t('contentBlockedAlert'));
    const updatedVideos = globalVideos.map(v => v.id === activeVideoModal.id ? { ...v, comments: [...v.comments, { id: `c_${Date.now()}`, role, author: formData.name || roleConfig[role].label, text: newCommentText }] } : v);
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

  const toggleUserStatus = (id) => {
    setAdminAllUsers(prev => prev.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
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
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-8">
              <h3 className="font-black text-xl mb-6 flex items-center gap-2 text-slate-800"><MessageSquare size={22} className="text-blue-500"/> {t('comments')} ({activeVideoModal.comments.length})</h3>
              <div className="flex gap-4 mb-8">
                 <div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-600">{formData.name ? formData.name.charAt(0) : 'U'}</div>
                 <div className="flex-1 flex flex-col gap-2">
                   <div className="flex gap-2"><input type="text" value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} placeholder={t('writeComment')} className="flex-1 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl px-5 py-3 text-sm outline-none transition-all"/><button onClick={handlePostComment} disabled={!newCommentText.trim()} className="bg-blue-600 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2"><Send size={18}/></button></div>
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
      <div className="relative min-h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden" dir={dir}>
        <FloatingBackground />
        
        {/* Modals */}
        {bookingModalTutor && (
          <div className="fixed inset-0 bg-black/60 z-[120] flex items-center justify-center p-4 animate-in fade-in duration-200">
             <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-slate-100">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative"><button onClick={() => setBookingModalTutor(null)} className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/40 rounded-full"><X size={20}/></button><h2 className="text-2xl font-black mb-1">{t('bookMe')}</h2><p className="text-white/80 font-medium">{bookingModalTutor.name} • {t(bookingModalTutor.subjects[0])}</p></div>
                <div className="p-6"><h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Clock size={20} className="text-blue-500"/> {t('availableSlots')}</h3>
                   <div className="space-y-3 mb-8">{bookingModalTutor.slots?.map(slot => (<label key={slot} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedSlot === slot ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:border-blue-200 bg-slate-50'}`}><span className={`font-bold ${selectedSlot === slot ? 'text-blue-700' : 'text-slate-700'}`}>{slot}</span><input type="radio" name="slot" value={slot} checked={selectedSlot === slot} onChange={() => setSelectedSlot(slot)} className="w-5 h-5 accent-blue-600" /></label>))}</div>
                   <button onClick={handleConfirmBooking} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"><CheckSquare size={20}/> {t('confirmBooking')}</button>
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
                      <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700">Pay with Card</button>
                   </div>
                   <button onClick={() => { 
                     alert("Payment Successful!"); 
                     setTransactions(prev => [{id: `TXN-${Date.now()}`, from: formData.name || 'User', to: paymentModalData.tutorName, amount: 5000, date: new Date().toISOString().split('T')[0], status: 'Completed'}, ...prev]);
                     setPaymentModalData(null); 
                   }} className="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold">Simulate Success</button>
                </div>
             </div>
          </div>
        )}

        <div className="relative z-10 h-full flex flex-col">
          <nav className="bg-white/90 backdrop-blur-md shadow-sm px-4 py-3 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Menu size={24} className="text-slate-700" /></button>
              <h1 className="text-xl font-bold flex items-center gap-2"><GraduationCap className={roleConfig[role].text} size={24} /> Tuition Hub</h1>
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
            </div>
          </nav>

          {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}></div>}
          <div className={`fixed top-0 ${dir === 'rtl' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : ''}`}>
            <div className="p-4 border-b border-slate-100 flex items-center justify-between"><h2 className="text-lg font-bold text-slate-800">{t('menu')}</h2><button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-lg"><X size={20}/></button></div>
            <div className="py-4 flex flex-col h-[calc(100%-70px)] overflow-y-auto">
              <div className="flex-1 space-y-1 px-3">
                {(role === 'admin' || role === 'superAdmin') && (
                  <>
                    <button onClick={() => { setActivePage('adminHome'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'adminHome' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}><Grid size={20} /> <span>{t('adminDashboard')}</span></button>
                    <button onClick={() => { setActivePage('adminVerify'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'adminVerify' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}><ShieldCheck size={20} /> <span>{t('verifyUsers')}</span></button>
                    <button onClick={() => { setActivePage('adminUsers'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'adminUsers' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}><Users size={20} /> <span>{t('adminUsers')}</span></button>
                    <button onClick={() => { setActivePage('adminPayments'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'adminPayments' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}><CreditCard size={20} /> <span>{t('adminPayments')}</span></button>
                    <button onClick={() => { setActivePage('adminReports'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'adminReports' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}><Activity size={20} /> <span>{t('adminReports')}</span></button>
                  </>
                )}
                {role === 'tutor' && (
                  <>
                    <button onClick={() => { setActivePage('dashboard'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'dashboard' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}><Grid size={20} /> <span>{t('dashboardPage')}</span></button>
                    <button onClick={() => { setActivePage('requests'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'requests' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}><Briefcase size={20} /> <span>Tuition Requests</span></button>
                    <button onClick={() => { setActivePage('messages'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'messages' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}><MessageSquare size={20} /> <span>{t('messages')}</span></button>
                    <button onClick={() => { setActivePage('updateProfile'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'updateProfile' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}><User size={20} /> <span>{t('updateProfile')}</span></button>
                  </>
                )}
                {(role === 'student' || role === 'guardian') && (
                  <>
                    <button onClick={() => { setActivePage('dashboard'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}><Grid size={20} /> <span>{t('dashboardPage')}</span></button>
                    <button onClick={() => { setActivePage('bookings'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'bookings' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}><CheckSquare size={20} /> <span>{t('myBookings')}</span></button>
                    <button onClick={() => { setActivePage('demoClasses'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'demoClasses' ? 'bg-rose-50 text-rose-700' : 'text-slate-600 hover:bg-slate-50'}`}><Video size={20} /> <span>{t('allDemoClasses')}</span></button>
                    <button onClick={() => { setActivePage('findTutor'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'findTutor' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><Search size={20} /> <span>{t('findTutor')}</span></button>
                    <button onClick={() => { setActivePage('updateProfile'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'updateProfile' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}><User size={20} /> <span>{t('updateProfile')}</span></button>
                  </>
                )}
                <div className="my-2 border-t border-slate-100"></div>
                <div className="flex flex-col"><button onClick={() => setIsLangMenuExpanded(!isLangMenuExpanded)} className="w-full flex items-center justify-between px-3 py-3 text-slate-600 hover:bg-slate-50 rounded-lg text-left"><div className="flex items-center gap-3"><Globe size={20} /> <span className="font-medium">{t('language')}</span></div><ChevronRight size={16} className={isLangMenuExpanded ? 'rotate-90' : ''} /></button><div className={`overflow-hidden transition-all duration-300 ${isLangMenuExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}><div className={`px-3 py-2 space-y-1 bg-slate-50/50 rounded-lg mx-2 border ${dir === 'rtl' ? 'pr-11' : 'pl-11'}`}>{supportedLanguages.map(lang => (<button key={lang} onClick={() => { setSelectedLanguage(lang); setIsLangMenuExpanded(false); }} className={`w-full text-left px-3 py-2 text-sm rounded-md hover:bg-slate-200 ${selectedLanguage === lang ? 'font-bold' : ''}`}>{lang}</button>))}</div></div></div>
                <button onClick={() => { setActivePage('support'); setIsMenuOpen(false); window.scrollTo(0,0); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-left transition-colors ${activePage === 'support' ? 'bg-orange-50 text-orange-700' : 'text-slate-600 hover:bg-slate-50'}`}><HelpCircle size={20} /> <span>{t('support')}</span></button>
              </div>
              <div className="px-4 border-t border-slate-100 pt-4"><button onClick={() => { setIsAuthenticated(false); setIsMenuOpen(false); setOtpStep(false); setOtp(''); }} className="w-full flex items-center gap-3 px-3 py-3 text-red-600 hover:bg-red-50 rounded-lg text-left font-medium"><LogOut size={20} /> {t('logout')}</button></div>
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
                  
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                     <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><BarChart3 className="text-emerald-500"/> Weekly Tuition Growth</h3>
                     <div className="flex items-end justify-center gap-4 h-48 mt-8 border-b-2 border-l-2 border-slate-100 pb-2 pl-2">
                        {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                           <div key={i} className="w-10 sm:w-12 bg-slate-100 rounded-t-lg relative group">
                              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs font-bold py-1 px-2 rounded whitespace-nowrap z-10 shadow-lg">{h} Tuitions</div>
                              <div className="bg-emerald-500 rounded-t-lg transition-all duration-500 hover:bg-emerald-400 cursor-pointer" style={{height: `${h}%`}}></div>
                           </div>
                        ))}
                     </div>
                     <div className="flex justify-center gap-4 sm:gap-6 mt-4 text-xs font-bold text-slate-400">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                     </div>
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
                        <div className="overflow-x-auto"><table className="w-full text-left"><thead><tr className="border-b border-slate-200 text-slate-400 text-xs uppercase"><th className="pb-4 font-bold">User</th><th className="pb-4 font-bold">Role</th><th className="pb-4 font-bold">Docs</th><th className="pb-4 font-bold text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-100">
                             {adminPendingUsers.map(u => (<tr key={u.id} className="hover:bg-slate-50 group transition-colors"><td className="py-4 font-bold text-slate-800">{u.name} <br/><span className="text-xs text-slate-400 font-medium">NID: {u.nid}</span></td><td className="py-4"><span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">{u.role}</span></td><td className="py-4 text-indigo-600 font-semibold text-sm cursor-pointer hover:underline flex items-center gap-1"><FileText size={16}/> View {u.documents}</td><td className="py-4 text-right"><div className="flex justify-end gap-2"><button onClick={()=>verifyUser(u.id)} className="px-4 py-2 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-sm">{t('accept')}</button><button onClick={()=>rejectUser(u.id)} className="px-4 py-2 bg-white text-red-500 font-bold rounded-xl border hover:bg-red-50 transition-colors shadow-sm">Reject</button></div></td></tr>))}
                           </tbody></table></div>
                     )}
                  </div>
              </div>
            )}

            {(role === 'admin' || role === 'superAdmin') && activePage === 'adminUsers' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-lg mb-8"><h2 className="text-3xl font-black mb-2 flex items-center gap-2"><Users size={32} /> {t('adminUsers')}</h2></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                     <div className="overflow-x-auto"><table className="w-full text-left"><thead><tr className="border-b border-slate-200 text-slate-400 text-xs uppercase"><th className="pb-4 font-bold">Name</th><th className="pb-4 font-bold">Role</th><th className="pb-4 font-bold">Status</th><th className="pb-4 font-bold text-right">Settings</th></tr></thead><tbody className="divide-y divide-slate-100">
                             {adminAllUsers.map(u => (<tr key={u.id} className="hover:bg-slate-50 transition-colors"><td className="py-4 font-bold text-slate-800">{u.name}</td><td className="py-4 text-sm font-medium text-slate-500">{u.role}</td><td className="py-4"><span className={`px-3 py-1 rounded-full text-xs font-bold ${u.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>{u.status}</span></td><td className="py-4 text-right">{u.status === 'Active' ? <button onClick={()=>toggleUserStatus(u.id)} className="px-4 py-1.5 bg-slate-100 text-red-600 font-bold rounded-lg hover:bg-red-50 text-xs border">Suspend</button> : <button onClick={()=>toggleUserStatus(u.id)} className="px-4 py-1.5 bg-slate-100 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 text-xs border">Activate</button>}</td></tr>))}
                           </tbody></table></div>
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
                      <h2 className="text-2xl font-bold text-slate-800 text-center">{selectedTutor.name}</h2>
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
                        <button onClick={() => handleInitiateBooking(selectedTutor)} className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"><CheckSquare size={20}/> {t('bookMe')}</button>
                        <button onClick={() => alert("Message interface opened!")} className="flex-1 py-4 bg-indigo-50 text-indigo-700 rounded-2xl font-bold text-lg hover:bg-indigo-100 transition-all flex items-center justify-center gap-2 border border-indigo-100 hover:-translate-y-1 hover:shadow-md"><MessageSquare size={20}/> {t('messageTutor')}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!selectedTutor && displayPage === 'dashboard' && role !== 'admin' && role !== 'superAdmin' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className={`p-8 rounded-2xl ${roleConfig[role].color} text-white shadow-lg`}><h2 className="text-3xl font-bold mb-2">{t('welcome')}</h2><p className="text-white/90 text-lg">{roleConfig[role].message}</p></div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(role === 'student' || role === 'guardian') ? (
                    <>
                      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100 col-span-1 md:col-span-2"><h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Search className="text-blue-500" /> {t('findTutor')}</h3><div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"><select onChange={(e) => handleLevelChange(e.target.value)} value={selectedLevel} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white outline-none"><option value="">{t('step1')}</option><option value="SSC">{t('SSC')}</option><option value="HSC">{t('HSC')}</option></select><select disabled={!selectedLevel} onChange={(e) => handleGroupChange(e.target.value)} value={selectedGroup} className="flex-1 py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none"><option value="">{t('step2')}</option>{selectedLevel && ['Science', 'Arts', 'Commerce'].map(grp => <option key={grp} value={grp}>{t(grp)}</option>)}</select><select disabled={!selectedGroup} onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none"><option value="">{t('step3')}</option>{selectedLevel && selectedGroup && curriculumData[selectedLevel][selectedGroup].map(sub => <option key={sub} value={sub}>{t(sub)}</option>)}</select></div>{selectedSubject && <button onClick={() => { setActivePage('findTutor'); window.scrollTo(0,0); }} className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold">{t('search')}</button>}</div>
                      <div className="col-span-1 md:col-span-2 mt-4"><h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Video className="text-rose-500" /> {t('demoFeed')}</h3><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{globalVideos.slice(0,6).map(video => (<div key={video.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all flex flex-col group cursor-pointer" onClick={() => setActiveVideoModal(video)}><div className="relative h-40 bg-slate-200"><img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center"><PlayCircle size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" /></div><span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-2 py-1 rounded-md">{t(video.subject)}</span></div><div className="p-4 flex-1 flex flex-col"><h4 className="font-bold text-slate-800 line-clamp-1">{video.title}</h4><p onClick={(e) => { e.stopPropagation(); const tutor = mockTutors.find(t => t.id === video.tutorId); if(tutor) { setSelectedTutor(tutor); window.scrollTo(0,0); } }} className="text-sm text-slate-500 mb-4 hover:text-blue-600 hover:underline cursor-pointer w-max transition-colors">{video.tutorName}</p><div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100"><div className="flex items-center gap-3 text-slate-500 text-sm"><span className="flex items-center gap-1"><Heart size={16} className={video.reactions > 0 ? "fill-rose-500 text-rose-500" : ""} /> {video.reactions}</span><span className="flex items-center gap-1"><MessageSquare size={16} /> {video.comments.length}</span></div><span className="text-blue-600 font-semibold text-sm">{t('watchNow')}</span></div></div></div>))}</div></div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-1 md:col-span-2 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-slate-100"><h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2"><BookOpen className="text-emerald-500" /> {t('teachingSubjects')}</h3><div className="flex gap-3 mb-6 flex-wrap">{tutorSelectedSubjects.length === 0 && <span className="text-slate-400 italic text-sm">No subjects added.</span>}{tutorSelectedSubjects.map(item => { const subId = `${item.level}-${item.subject}`; return (<span key={subId} className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-semibold border border-emerald-200 flex items-center gap-2">{t(item.level)} {t('Level')} - {t(item.subject)} <button onClick={() => setTutorSelectedSubjects(p => p.filter(s => s.subject !== item.subject || s.level !== item.level))}><X size={14} className="hover:text-red-500"/></button></span>)})}</div>{tutorSelectedSubjects.length < 3 && (<div className="flex flex-col md:flex-row gap-4"><select onChange={(e) => handleLevelChange(e.target.value)} value={selectedLevel} className="flex-1 py-3 px-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500"><option value="">{t('step1')}</option><option value="SSC">{t('SSC')}</option><option value="HSC">{t('HSC')}</option></select><select disabled={!selectedLevel} onChange={(e) => handleGroupChange(e.target.value)} value={selectedGroup} className="flex-1 py-3 px-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 disabled:opacity-50"><option value="">{t('step2')}</option>{selectedLevel && ['Science', 'Arts', 'Commerce'].map(grp => <option key={grp} value={grp}>{t(grp)}</option>)}</select><select disabled={!selectedGroup} onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject} className="flex-1 py-3 px-3 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 disabled:opacity-50"><option value="">{t('step3')}</option>{selectedLevel && selectedGroup && curriculumData[selectedLevel][selectedGroup].map(sub => <option key={sub} value={sub}>{t(sub)}</option>)}</select><button disabled={!selectedSubject} onClick={() => { setTutorSelectedSubjects(prev => [...prev, { level: selectedLevel, subject: selectedSubject }]); setSelectedSubject(''); }} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold disabled:opacity-50 hover:bg-emerald-600 transition-colors flex items-center gap-2"><Plus size={20}/> {t('addSubject')}</button></div>)}</div>
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="relative">
                        <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${dir === 'rtl' ? 'right-3' : 'left-3'}`} size={18} />
                        <input type="text" placeholder="Search by name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={`w-full py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none ${dir === 'rtl' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`} />
                      </div>
                      <select onChange={(e) => handleLevelChange(e.target.value)} value={selectedLevel || ''} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white outline-none"><option value="">{t('step1')}</option><option value="SSC">{t('SSC')}</option><option value="HSC">{t('HSC')}</option></select>
                      <select disabled={!selectedLevel} onChange={(e) => handleGroupChange(e.target.value)} value={selectedGroup || ''} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none"><option value="">{t('step2')}</option>{selectedLevel && ['Science', 'Arts', 'Commerce'].map(grp => <option key={grp} value={grp}>{t(grp)}</option>)}</select>
                      <select disabled={!selectedGroup} onChange={(e) => setSelectedSubject(e.target.value)} value={selectedSubject || ''} className="w-full py-3 px-4 rounded-xl border border-slate-200 focus:border-blue-500 bg-white disabled:opacity-50 outline-none"><option value="">{t('step3')}</option>{selectedLevel && selectedGroup && curriculumData[selectedLevel][selectedGroup].map(sub => <option key={sub} value={sub}>{t(sub)}</option>)}</select>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={() => { document.getElementById('tutor-results')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex-1 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-md">Search Now</button>
                      <button onClick={() => { setSearchQuery(''); setSelectedLevel(''); setSelectedGroup(''); setSelectedSubject(''); }} className="px-6 py-4 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors">Clear Filters</button>
                    </div>
                  </div>

                  {/* Section 1: Best Rated Matches */}
                  <h3 id="tutor-results" className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2"><Star className="text-amber-500 fill-amber-500" /> Best Rated Matches</h3>
                  {topMatches.length === 0 ? (
                    <div className="py-10 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed mb-10 font-bold">No 4.7+ rated tutors match your specific criteria.</div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
                      {topMatches.map(tutor => (
                          <div key={tutor.id} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1" onClick={() => setSelectedTutor(tutor)}>
                            <div className="relative h-32 bg-blue-50"><img src={tutor.image} className="w-full h-full object-contain" /><div className="absolute top-2 right-2 bg-white/90 px-1.5 py-0.5 rounded-lg flex items-center gap-1 text-amber-500 shadow-sm"><Star size={12} fill="currentColor"/><span className="text-xs font-black">{tutor.rating}</span></div></div>
                            <div className="p-4 flex-1 flex flex-col">
                              <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{tutor.name}</h4>
                              <p className="text-[10px] font-bold text-blue-600 mt-1 uppercase">{tutor.subjects.join(', ')}</p>
                              <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between"><span className="text-[10px] font-bold text-slate-400">{tutor.locationName}</span><ChevronRight size={14} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"/></div>
                            </div>
                          </div>
                      ))}
                    </div>
                  )}

                  {/* Section 2: Suggested for You */}
                  <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2"><ThumbsUp className="text-indigo-500" /> Suggested for You</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pb-20">
                    {suggestions.map(tutor => (
                        <div key={tutor.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all cursor-pointer opacity-90 hover:opacity-100" onClick={() => setSelectedTutor(tutor)}>
                          <div className="relative h-28 bg-slate-50"><img src={tutor.image} className="w-full h-full object-contain opacity-80 group-hover:opacity-100" /></div>
                          <div className="p-3 flex-1 flex flex-col">
                            <h4 className="font-bold text-slate-700 text-xs line-clamp-1">{tutor.name}</h4>
                            <p className="text-[9px] font-semibold text-slate-400 mt-1">{tutor.subjects[0]} Expert</p>
                            <div className="flex items-center gap-1 mt-2 text-slate-400"><Star size={10} fill="currentColor" /><span className="text-[10px] font-bold">{tutor.rating}</span></div>
                          </div>
                        </div>
                    ))}
                    {suggestions.length === 0 && <div className="col-span-full py-12 text-center text-slate-400 font-medium">No suggestions available right now.</div>}
                  </div>
               </div>
            )}

            {!selectedTutor && displayPage === 'demoClasses' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-8 rounded-3xl text-white shadow-lg mb-8"><h2 className="text-3xl font-black mb-2 flex items-center gap-2"><Video size={32} /> {t('allDemoClasses')}</h2></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">{globalVideos.slice(0,20).map(video => (<div key={video.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => setActiveVideoModal(video)}><div className="relative h-44"><img src={video.thumbnail} className="w-full h-full object-cover" /><div className="absolute inset-0 flex items-center justify-center bg-black/20"><PlayCircle size={48} className="text-white opacity-80" /></div></div><div className="p-4"><h4>{video.title}</h4></div></div>))}</div>
               </div>
            )}

            {!selectedTutor && displayPage === 'bookings' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-3xl text-white shadow-lg mb-8">
                    <h2 className="text-3xl font-black mb-2 flex items-center gap-2"><CheckSquare size={32} /> {t('myBookings')}</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredBookings.map(b => (
                      <div key={b.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                         <div className="flex items-center gap-4 mb-4"><img src={b.image} className="w-12 h-12 rounded-full"/><h4 className="font-bold">{b.tutorName}</h4></div>
                         <p className="text-sm">Subject: {b.subject}</p>
                         <p className="text-sm">Status: <span className="font-bold uppercase text-xs">{b.status}</span></p>
                      </div>
                    ))}
                  </div>
               </div>
            )}
            
            {!selectedTutor && displayPage === 'requests' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500"><div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-8 rounded-3xl text-white shadow-lg mb-8"><h2 className="text-3xl font-black mb-2 flex items-center gap-2"><Briefcase size={32} /> Tuition Requests</h2></div><div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                     {tutorRequests.map(req => (<div key={req.id} className="flex justify-between p-4 border-b"><div><h4 className="font-bold">{req.studentName}</h4><p className="text-sm">{req.subject}</p></div><div className="flex gap-2"><button className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold">Accept</button></div></div>))}
                  </div></div>
            )}

            {!selectedTutor && displayPage === 'support' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-8 rounded-3xl text-white shadow-lg mb-8"><h2 className="text-3xl font-black mb-2 flex items-center gap-2"><HelpCircle size={32} /> {t('supportTitle')}</h2></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                    <h3 className="font-bold mb-4">Contact Support</h3>
                    <p>Email: support@tuitionhub.com</p>
                  </div>
               </div>
            )}
            
            {!selectedTutor && displayPage === 'updateProfile' && (
               <div className="bg-white p-8 rounded-3xl shadow-xl animate-in fade-in">
                  <h3 className="text-2xl font-bold mb-6">Update Profile</h3>
                  <button onClick={() => { setIsProfileComplete(true); setActivePage('dashboard'); }} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">Simulate Profile Completion</button>
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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex items-center justify-center p-4 font-sans text-slate-800 overflow-hidden" dir={dir}>
      <FloatingBackground />
      <div className="relative z-10 bg-white/95 backdrop-blur-md w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-6">
        <div className="text-center mb-8"><h1 className="text-2xl font-bold">Tuition Hub</h1><p className="text-sm text-slate-500">Login to your account</p></div>
        <form onSubmit={handleSubmit} className="space-y-4">
           <input type="email" placeholder={t('email')} required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500" />
           <input type="password" placeholder={t('password')} required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full p-3 border rounded-xl outline-none focus:border-blue-500" />
           <button type="submit" className={`w-full py-3 rounded-xl text-white font-bold bg-blue-600 hover:bg-blue-700 transition-colors`}>{isSubmitting ? t('processing') : t('loginBtn')}</button>
        </form>
        <div className="mt-6 flex justify-center gap-4">
           <button onClick={() => setRole('student')} className={`text-xs font-bold px-3 py-1 rounded-full ${role==='student'?'bg-blue-100 text-blue-700':'text-slate-400'}`}>Student</button>
           <button onClick={() => setRole('tutor')} className={`text-xs font-bold px-3 py-1 rounded-full ${role==='tutor'?'bg-emerald-100 text-emerald-700':'text-slate-400'}`}>Teacher</button>
           <button onClick={() => setRole('admin')} className={`text-xs font-bold px-3 py-1 rounded-full ${role==='admin'?'bg-slate-100 text-slate-700':'text-slate-400'}`}>Admin</button>
        </div>
      </div>
    </div>
  );
}