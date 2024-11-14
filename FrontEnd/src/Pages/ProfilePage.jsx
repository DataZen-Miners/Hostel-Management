import ProfileCard from "../Components/Profile/ProfileCard"
import Skills from "../Components/Profile/Skills"
import AboutMe from "../Components/Profile/AboutMe"

const ProfilePage = () => {
    const profileData = {
      name: "John Doe",
      jobTitle: "Software Developer",
      profilePic: "https://i.pravatar.cc/300",
      aboutText: "Passionate software developer with 5 years of experience in web technologies. I love creating user-friendly applications and solving complex problems.",
      skills: ["JavaScript", "React", "Node.js", "Python", "SQL"]
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            <ProfileCard 
              name={profileData.name} 
              jobTitle={profileData.jobTitle} 
              profilePic={profileData.profilePic} 
            />
            <div className="md:w-2/3 md:pl-8">
              <AboutMe aboutText={profileData.aboutText} />
              <Skills skills={profileData.skills} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;