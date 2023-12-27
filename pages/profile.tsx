import React from 'react';

// Header and Footer Components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

// Profile Components
import ProfileCard from '../components/profile/profile_card/ProfileCard';
import NavigationButtons from '../components/profile/navigation_buttons/NavigationButtons';
import SocialAccounts from '../components/profile/social_accounts/SocialAccounts';
import FollowersSection from '../components/profile/followers_section/FollowersSection';
import FollowingSection from '../components/profile/following_section/FollowingSection';

// Main Content Components
import NewsSection from '../components/profile/news_section/NewsSection';
import EventsSection from '../components/profile/events_section/EventsSection';
import DiscussionsSection from '../components/profile/discussions_section/DiscussionsSection';
import MessagesSection from '../components/profile/messages_section/MessagesSection';
import HistorySection from '../components/profile/history_section/HistorySection';
import SettingsSection from '../components/profile/settings_section/SettingsSection';

const Profile = () => {
    return (
      <div className="flex flex-col min-h-screen">
     
        <div className="px-4 py-8 bg-gray-100">
          <ProfileCard />
          <NavigationButtons />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
                <div className="bg-white p-4 shadow rounded-lg">
                <SocialAccounts />
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                <FollowersSection />
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                <FollowingSection />
            </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 shadow rounded-lg">
                <NewsSection />
                <hr className="my-4 border-gray-200" />
                <EventsSection />
                <hr className="my-4 border-gray-200" />
                <DiscussionsSection />
            </div>
            <div className="bg-white p-4 shadow rounded-lg">
                <MessagesSection />
                <hr className="my-4 border-gray-200" />
                <HistorySection />
                <hr className="my-4 border-gray-200" />
                <SettingsSection />
            </div>
        </div>
        </div>

        </div>
      </div>
    );
  };

export default Profile;
