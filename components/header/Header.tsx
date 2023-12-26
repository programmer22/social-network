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

