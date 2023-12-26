// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <div className="flex justify-center py-24">
//       <SignIn />
//     </div>
//   );
// }




import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from 'next/router';

export default function SignInPage() {

  return (
    <div className="flex justify-center py-24">
      <SignIn  />
    </div>
  );
}

