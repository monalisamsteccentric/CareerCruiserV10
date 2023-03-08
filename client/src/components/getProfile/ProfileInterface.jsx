import Navigation from '../Navigation'
import ProfileEducation from './ProfileEducation'
import ProfileGeneral from './ProfileGeneral'
import ProfileJobPreferences from './ProfileJobPreferences'
import ProfileProject from './ProfileProject'
import ProfileSkills from './ProfileSkills'
import ProfileWorkExperience from './ProfileWorkExperience'

const ProfileInterface = () => {
    if(!localStorage.getItem('username')){
        return <h1>Please Login to Continue...</h1>
    }
    return (
        <div>
            <Navigation />
            <div className='flex flex-col bg-gray-100'>

                <div className='border-2 border-black-400 bg-white m-4 w-5/6 rounded-lg p-2'>
                    <ProfileGeneral />
                </div>
                <div className='border-2 border-black-400 bg-white m-4 w-5/6 rounded-lg p-2'>
                    <ProfileEducation />
                </div>
                <div className='border-2 border-black-400 bg-white m-4 w-5/6 rounded-lg p-2'>
                    <ProfileJobPreferences />
                </div>
                <div className='border-2 border-black-400 bg-white m-4 w-5/6 rounded-lg p-2'>
                    <ProfileProject />
                </div>
                <div className='border-2 border-black-400 bg-white m-4 w-5/6 rounded-lg p-2'>
                    <ProfileSkills />
                </div>

                <div className='border-2 border-black-400 bg-white m-4 w-5/6 rounded-lg p-2'>
                    <ProfileWorkExperience />
                </div>



            </div>
        </div>

    )
}

export default ProfileInterface
