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
}
