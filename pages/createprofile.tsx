import CreateProfile from '../components/create-profile/CreateProfile';
import { useUser } from "@clerk/nextjs";

export default function CreateProfilePage() {
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <CreateProfile userEmail={user?.email} />
    </div>
  );
}
