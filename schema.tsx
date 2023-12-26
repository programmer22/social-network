Based on your code, I will create a few schemas that represent the different aspects of your application:

1. **Component Structure Schema**: This schema will outline the hierarchical structure of your React components in your application.

2. **State Management Schema**: This schema will focus on the state management aspects, particularly the use of `useState` and how states are updated and utilized across different components.

3. **Routing and Navigation Schema**: This schema will depict the routing mechanism, showing how different pages and components are interconnected, focusing on your use of `router.push` and `<Link>` for navigation.

4. **API Interaction Schema**: This schema will illustrate how your application interacts with external APIs, including database connections, user authentication, and data fetching.

5. **UI Layout Schema**: This schema will provide a visual representation of the user interface layout, showing how various components like headers, footers, profile cards, and sections are arranged on the page.

Let's start with the first schema:

### 1. Component Structure Schema

- **App**
  - **Header**
    - **Navigation (Link)**
    - **UserButton**
  - **Main Content**
    - **SignIn/SignUp/Home** (Conditional rendering based on authentication)
      - **User Authentication** (useUser)
      - **Social Metrics** (useState for followers, likes, etc.)
      - **Crypto Balance** (useState for bitcoin, ethereum)
      - **DashboardX** (Conditional rendering of components)
        - **Metric Cards** (Render social metrics and crypto balances)
        - **NewsFeed**
        - **Profile**
        - **Wallet**
    - **Footer**
      - **Links** (Privacy, Terms, About, Contact)
  - **Profile**
    - **ProfileCard**
    - **NavigationButtons**
    - **SocialAccounts**
    - **FollowersSection**
    - **FollowingSection**
    - **NewsSection**
    - **EventsSection**
    - **DiscussionsSection**
    - **MessagesSection**
    - **HistorySection**
    - **SettingsSection**

### 2. State Management Schema

- **useState**
  - **Social Metrics**: followers, likes, views, messages, comments, statuses, friends, pictures, groups, games, money
  - **Crypto Balance**: bitcoin, ethereum
  - **Database Connection Status**

### 3. Routing and Navigation Schema

- **Pages**
  - **"/"**: Home Page
  - **"/dashboard"**: Dashboard Page
  - **"/profile-setup"**: Profile Setup Page
  - **"/newsfeed"**: Newsfeed Page
  - **"/profile"**: Profile Page
  - **"/wallet"**: Wallet Page

### 4. API Interaction Schema

- **User Authentication**
  - **useUser**: Fetch user authentication status
- **API Calls**
  - **check-profile**: Fetch profile existence
  - **checkDbConnection**: Fetch database connection status
  - **Simulated API Call**: Fetch and set social metrics and crypto balances

### 5. UI Layout Schema

- **Header**
  - **Navigation Bar**
  - **User Information**
- **Main Content Area**
  - **Metric Display Cards**
  - **Newsfeed**
  - **User Profile Information**
- **Footer**
  - **Links and Legal Information**

These schemas provide a structural overview of your application's components, state management, navigation, API interactions, and UI layout.

________________________________________________________________







Create a schema(s) for me based on my code: import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
} import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  );
}

'use client'

import Head from 'next/head';
import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import router from 'next/router';

export default function Home() {
  const { isSignedIn, user } = useUser();
  const [socialMetrics, setSocialMetrics] = useState({
    followers: 0,
    likes: 0,
    views: 0,
    messages: 0,
    comments: 0,
    statuses: 0,
    friends: 0,
    pictures: 0,
    groups: 0,
    games: 0,
    money: 0,
  });
  const [cryptoBalance, setCryptoBalance] = useState({
    bitcoin: 0,
    ethereum: 0,
  });

  const [dbConnectionStatus, setDbConnectionStatus] = useState('');


  //Check to see if user logged in has a profile or not if so, naviate to dashboard 
  // useEffect(() => {
  //   if (isSignedIn && user) {
  //     // Replace this with a real API call to your backend
  //     fetch(`/api/check-profile?userId=${user.id}`)
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.hasProfile) {
  //           // Redirect to dashboard
  //           router.push('/dashboard');
  //         } else {
  //           // Redirect to profile setup
  //           router.push('/profile-setup');
  //         }
  //       });
  //   }
  // }, [isSignedIn, user]);


  useEffect(() => {
    fetch('/api/checkDbConnection')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setDbConnectionStatus('Database connection successful');
        } else {
          setDbConnectionStatus('Database connection failed');
        }
      })
      .catch(error => {
        console.error('Error fetching database status: ', error);
        setDbConnectionStatus('Database Connection Failed');
      });
}, []);

  // Simulate fetching social metrics and crypto balances
  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      setSocialMetrics({
        followers: 1200,
        likes: 3400,
        views: 4800,
        messages: 230,
        comments: 580,
        statuses: 35,
        friends: 182,
        pictures: 240,
        groups: 18,
        games: 7,
        money: 150.75,
      });
      setCryptoBalance({
        bitcoin: 0.5,
        ethereum: 2.3,
      });
    }, 1000);
  }, []);

  if (!isSignedIn) {
    return <div>Please sign in to view your dashboard.</div>;
  }

  // Function to render metric cards
  const renderMetricCard = (metricName: any, value: any) => (
    <div className="p-4 shadow rounded bg-white border border-gray-200">
      <h3 className="text-lg font-semibold">{metricName}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Head>
        <title>Social Network Dashboard</title>
        <meta name="description" content="Dashboard for social network metrics and crypto wallet balance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-8">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold">DashboardX</h1>
          <div>
            <p>Hello, {user?.firstName}</p>
            <p>
              {
                dbConnectionStatus ? <p className="text-green-600">DB Connection: Connection Successful</p> : <p className="text-red-600">DB Connection: Unsuccessful</p>
              }
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {Object.entries(socialMetrics).map(([metricName, value]) =>
            renderMetricCard(metricName.charAt(0).toUpperCase() + metricName.slice(1), value)
          )}
        </section>

        <section className="my-8">
          <h2 className="text-xl font-semibold mb-4">Crypto Wallet Balance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 shadow rounded bg-white border border-gray-200">
              <h3 className="text-lg font-semibold">Bitcoin</h3>
              <p className="text-2xl">{cryptoBalance.bitcoin} BTC</p>
            </div>
            <div className="p-4 shadow rounded bg-white border border-gray-200">
              <h3 className="text-lg font-semibold">Ethereum</h3>
              <p className="text-2xl">{cryptoBalance.ethereum} ETH</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} // components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-4 text-gray-600">
      © 2023 Nick All Rights Reserved.
      <a href="#" className="text-blue-500 hover:text-blue-600">Privacy</a> |
      <a href="#" className="text-blue-500 hover:text-blue-600">Terms and Conditions</a> |
      <a href="#" className="text-blue-500 hover:text-blue-600">About</a> |
      <a href="#" className="text-blue-500 hover:text-blue-600">Contact us</a>
    </footer>
  );
};

export default Footer;
import { UserButton } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import Link from 'next/link';


export default function Header () {
    return (
        <div className="bg-blue flex justify-between align-center items-center p-4">
            <>
                <Link href="/">DashboardX</Link>
                    <nav className="flex align-center items-center list-none gap-8">
                        <Link href="/"><li>Dashboard</li></Link>
                        <Link href="/newsfeed"><li>Newsfeed</li></Link>
                        <Link href="/profile"><li>Profile</li></Link>
                        <Link href="/wallet"><li>Money</li></Link>
                    </nav>
                <UserButton afterSignOutUrl='/' />
            </>
        </div>
    )
}

import React from 'react';

const AboutMeSection = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">About Me</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tincidunt justo. Proin tincidunt, neque at tristique mattis, ex nulla hendrerit est, id lacinia erat lectus id justo.
      </p>
      <p className="text-gray-600">
        Vestibulum maximus in nisi in sodales. Duis ut aliquam elit. Vestibulum hendrerit accumsan risus, id convallis ipsum bibendum eu. Sed id ante id justo vehicula pellentesque in non erat.
      </p>
      <p className="text-gray-600">
        Curabitur id odio vel elit vulputate malesuada. Praesent volutpat nisi quis est rhoncus, a scelerisque orci congue. Sed eget libero eu orci viverra placerat.
      </p>
    </div>
  );
};

export default AboutMeSection;
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Import calendar icon

const BookedEventsSection = () => {
  // Sample data for booked events
  const bookedEvents = [
    "Event 1",
    "Event 2",
    "Event 3",
    "Event 4",
    "Event 5",
    // Add more booked events as needed
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <FaCalendarAlt className="mr-2 text-blue-500" /> Booked Events
      </h3>
      <ul className="text-gray-600">
        {bookedEvents.map((event, index) => (
          <li key={index} className="mb-1">
            <FaCalendarAlt className="mr-2 text-gray-400" />
            {event}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={() => alert('View All Booked Events clicked')} // Replace this with your logic
        >
          View All Booked Events
        </button>
      </div>
    </div>
  );
};

export default BookedEventsSection;
import React from 'react';

const DiscussionsSection = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Discussions</h3>
      <ul className="text-gray-600">
        <li className="mb-1">
          <span className="text-blue-500">Discussion 1:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li className="mb-1">
          <span className="text-blue-500">Discussion 2:</span> Sed vel tincidunt justo. Proin tincidunt, neque at tristique mattis, ex nulla hendrerit est.
        </li>
        <li className="mb-1">
          <span className="text-blue-500">Discussion 3:</span> Vestibulum maximus in nisi in sodales. Duis ut aliquam elit.
        </li>
        <li className="mb-1">
          <span className="text-blue-500">Discussion 4:</span> Curabitur id odio vel elit vulputate malesuada. Praesent volutpat nisi quis est rhoncus.
        </li>
      </ul>
    </div>
  );
};

export default DiscussionsSection;
import React from 'react';

const EventsSection = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Events</h3>
      <div className="flex flex-wrap -mx-2">
        {/* Event Card 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-40 w-full" style={{ backgroundImage: 'url(https://source.unsplash.com/random/400x400?event)' }}></div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Event 1</h4>
              <p className="text-gray-600">Date: January 15, 2023</p>
              <p className="text-gray-600">Location: New York</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 focus:outline-none">RSVP</button>
            </div>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-40 w-full" style={{ backgroundImage: 'url(https://source.unsplash.com/random/400x400?event)' }}></div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Event 2</h4>
              <p className="text-gray-600">Date: February 22, 2023</p>
              <p className="text-gray-600">Location: Los Angeles</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 focus:outline-none">RSVP</button>
            </div>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-40 w-full" style={{ backgroundImage: 'url(https://source.unsplash.com/random/400x400?event)' }}></div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Event 3</h4>
              <p className="text-gray-600">Date: March 30, 2023</p>
              <p className="text-gray-600">Location: San Francisco</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 focus:outline-none">RSVP</button>
            </div>
          </div>
        </div>

        {/* Add more event cards as needed */}
      </div>
    </div>
  );
};

export default EventsSection; import React from 'react';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa'; // Using react-icons for user avatars and follow-back icons

const FollowersSection = () => {
  // Sample data for followers (you can replace this with real data)
  const followersList = [
    { name: "Follower 1", id: 1 },
    { name: "Follower 2", id: 2 },
    { name: "Follower 3", id: 3 },
    { name: "Follower 4", id: 4 },
    { name: "Follower 5", id: 5 },
    // Add more followers as needed
  ];

  return (
    <div className="mb-4 p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Followers</h3>
      <ul>
        {followersList.map(follower => (
          <li key={follower.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
            <div className="flex items-center">
              <FaUserCircle className="text-gray-400 text-2xl mr-3" />
              <span className="text-gray-700">{follower.name}</span>
            </div>
            <button className="text-green-500 hover:text-green-600 focus:outline-none">
              <FaUserPlus />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersSection;
import React from 'react';
import { FaUserCircle, FaUserMinus } from 'react-icons/fa'; // Using react-icons for user avatars and unfollow icons

const FollowingSection = () => {
  // Sample data for following list (you can replace this with real data)
  const followingList = [
    { name: "Following 1", id: 1 },
    { name: "Following 2", id: 2 },
    { name: "Following 3", id: 3 },
    { name: "Following 4", id: 4 },
    { name: "Following 5", id: 5 },
    // Add more followings as needed
  ];

  return (
    <div className="mb-4 p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Following</h3>
      <ul>
        {followingList.map(following => (
          <li key={following.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
            <div className="flex items-center">
              <FaUserCircle className="text-gray-400 text-2xl mr-3" />
              <span className="text-gray-700">{following.name}</span>
            </div>
            <button className="text-red-500 hover:text-red-600 focus:outline-none">
              <FaUserMinus />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowingSection; import React from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'; // Example icons from react-icons

const HistorySection = () => {
  const historyItems = [
    "Visited an art exhibition",
    "Completed a marathon",
    "Attended a cooking class",
    "Traveled to a new city",
    "Learned a new language",
    // Add more history items as needed
  ];

  return (
    <div className="mb-6 p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">History</h3>
      <ul className="space-y-3">
        {historyItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <div className="flex-shrink-0 text-blue-500 mr-3">
              {index % 2 === 0 ? <FaRegCircle /> : <FaRegCheckCircle />}
            </div>
            <span className="flex-grow text-gray-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorySection; import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for user avatars

const MessagesSection = () => {
  // Sample data for messages (you can replace this with real data)
  const messages = [
    { text: "Message 1", time: "10:00 AM" },
    { text: "Message 2", time: "Yesterday" },
    { text: "Message 3", time: "Monday" },
    { text: "Message 4", time: "Last Week" },
    { text: "Message 5", time: "Sep 12" },
    // Add more messages as needed
  ];

  return (
    <div className="mb-4 p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Messages</h3>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
            <div className="flex items-center">
              <FaUserCircle className="text-gray-400 text-2xl mr-3" />
              <span className="text-gray-700">{message.text}</span>
            </div>
            <span className="text-sm text-gray-500">{message.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesSection;
// components/profile/navigation_buttons/NavigationButtons.tsx
import React from 'react';

const NavigationButtons = () => {
  return (
    <div className="px-4 py-2 bg-gray-200 border-2 border-black">
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Activity</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">About</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Discussions</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Events</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Followers</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Following</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Messages</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Booked Events</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">History</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Settings</button>
      </div>
    </div>
  );
};

export default NavigationButtons; // components/NewsItem.jsx
import React from 'react';

const NewsItem = ({ item }: any) => {
  if (!item || typeof item.title !== 'string') {
    // Render nothing or a placeholder if item data is not available
    return null; 
  }

  return (
    <li className="mb-1">{item.title}</li>
  );
};

export default NewsItem;
import React from 'react';

const NewsSection = () => {
  return (
    <div className="w-full md:w-1/3 pl-4 space-y-6">
      <div className="mb-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-bold mb-3">Post Your Event</h3>
        <p>Have an event you'd like to share? Post it on Goeventi for free! Create an account, fill out a simple form, and you're all set.</p>
        <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500">Post It Now</button>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Latest News</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li className="mb-2">Music - Discover the latest hits and trends.</li>
          <li className="mb-2">Ads - Exclusive deals and offers you can't miss.</li>
          <li className="mb-2">Sports - Updates on your favorite teams and matches.</li>
        </ul>
        <button className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Discover More</button>
      </div>
    </div>
  );
};

export default NewsSection; import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  const coverImageUrl = "https://source.unsplash.com/random/1920x1080?cityscape";
  const profileImageUrl = "https://source.unsplash.com/random/100x100?person";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-black">
      <div className="h-48 w-full" style={{ backgroundImage: `url(${coverImageUrl})`, backgroundSize: 'cover' }}></div>
      <div className="flex justify-between p-4">
        <div className="flex">
          <div className="h-24 w-24 rounded-full border-4 border-white -mt-12 mr-3 overflow-hidden">
            <Image src={profileImageUrl} alt="Profile" width={96} height={96} className="rounded-full" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Nick Roe</h2>
            <p className="text-gray-600">Member since August 2023</p>
            <p className="text-gray-600">Dallas, Texas</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Add Friend</button>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Follow</button>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Message</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard; import React from 'react';
// Assuming you have an icon library like react-icons
import { FaUserCog, FaLock, FaBell, FaCreditCard, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa';

const SettingsSection = () => {
  return (
    <div className="mb-6 p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Settings</h3>
      <div className="flex flex-col space-y-3">
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaUserCog className="mr-2" /> Account Settings
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaLock className="mr-2" /> Privacy
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaShieldAlt className="mr-2" /> Security
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaBell className="mr-2" /> Notifications
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaCreditCard className="mr-2" /> Billing
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaQuestionCircle className="mr-2" /> Help & Support
        </button>
      </div>
    </div>
  );
};

export default SettingsSection;
// components/SocialAccount.jsx
import React from 'react';

const SocialAccount = ({ account }: any) => {
  if (!account || !account.name || !account.link) {
    // Handle undefined or incomplete account object
    return null; // Or render some placeholder or error message
  }

  return (
    <li className="mb-1">
      <i className={`fab fa-${account.name.toLowerCase()}`}></i> {account.link}
    </li>
  );
};

export default SocialAccount;
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialAccounts = () => {
  return (
    <div className="w-2/3 pr-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Social Accounts</h3>
        <ul>
          <li className="flex items-center mb-2 text-gray-700"><FaTwitter className="mr-2 text-blue-500" /> twitter.com/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaFacebook className="mr-2 text-blue-600" /> facebook.com/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaInstagram className="mr-2 text-pink-500" /> instagram.com/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaLinkedin className="mr-2 text-blue-700" /> linkedin.com/in/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaYoutube className="mr-2 text-red-600" /> youtube.com/johndoe</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">What's new, John Doe?</h3>
        <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500" placeholder="Share your thoughts..."></textarea>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Upload activity</button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">People Viewed Profile</h3>
        <ul className="space-y-1">
          {["Johnson", "Jessica William", "Rock", "David Smith", "Ricky Doe"].map((name, index) => (
            <li key={index} className="text-gray-700">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialAccounts;
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://nicklopacki95:RYZWT6OpMrN3@ep-old-sky-77997761.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: true
});

export default async function handler(req, res) {
  const client = await pool.connect();
  try {
    const response = await client.query('SELECT version()');
    console.log(response.rows[0]);
    res.status(200).json({ status: 'success', data: response.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Database connection failed' });
  } finally {
    client.release();
  }
}
// pages/_app.tsx
import { ClerkProvider } from '@clerk/nextjs';
import '../app/globals.css'; // Adjust the path to your global styles if necessary

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
'use client'

import React, { useState, useEffect } from 'react';
// Import necessary components and icons
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

export default function NewsFeed() {
    // Sample state to hold posts (replace with real data fetching mechanism)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from your data source/API and set them in state
        // setPosts(fetchPosts());
    }, []);


    // Example post data
    const examplePost = {
        userName: 'Alex Smith',
        timeAgo: '2h ago',
        content: 'Had an amazing time exploring the mountains! #HikingAdventure',
        imageUrl: 'path_to_image.jpg' // Replace with the actual image path
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Newsfeed</h2>
            {posts.length ? (
                posts.map((post, index) => (
                    <div key={index} className="mb-6 p-4 bg-white shadow rounded-lg">
                        <div className="flex items-center mb-3">
                            {/* Replace with user avatar */}
                            <div className="mr-3 rounded-full bg-gray-200 w-10 h-10"></div>
                            {/* Replace with user name and post date */}
                            <div>
                                <p className="font-semibold">User Name</p>
                                <p className="text-sm text-gray-500">Posted on Date</p>
                            </div>
                        </div>
                        <p>{post.content}</p>
                        {/* Post image if available */}
                        {post.image && <img src={post.image} alt="Post" className="my-3 rounded" />}
                        <div className="flex">
                            <button className="flex items-center mr-4 text-gray-600 hover:text-red-500">
                                <FaHeart className="mr-1" /> Like
                            </button>
                            <button className="flex items-center mr-4 text-gray-600 hover:text-blue-500">
                                <FaComment className="mr-1" /> Comment
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-green-500">
                                <FaShare className="mr-1" /> Share
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts to show</p>
            )}
        </div>
    );
}
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
        <Header />
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
        <Footer />
      </div>
    );
  };

export default Profile;