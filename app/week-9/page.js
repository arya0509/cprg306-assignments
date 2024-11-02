// Import the useUserAuth hook
'use client';
import  {useUserAuth} from "./_utils/auth-context";
export default function Page() {
    console.log("Page log");
   // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
    // Sign in to Firebase with GitHub authentication
    const signIn = async () => {   
    await gitHubSignIn();
    };
 
    // Sign out of Firebase
    const signOut = async () =>{
    await firebaseSignOut();
    };

    return(
            <div className="flex justify-center items-center h-screen w-full bg-slate-900 ">
                {user ? (
                    <div className="bg-slate-800 h-1/4 w-1/4 flex justify-center items-center flex-col" >
                        <h1>Welcome {user.displayName}!</h1>
                        <a className="hover:bg-blue-700" href="http://localhost:3000/week-9/shopping-list">Continue to you shopping list</a>
                        <button className="bg-slate-950 hover:bg-blue-700 mt-3 h-10 w-20" onClick={()=>signOut()}>Sign Out</button>
                    </div>
                ):(
                    <div className="bg-slate-800 h-1/4 w-1/4 flex justify-center items-center flex-col">
                        <h1>Welcome! Sign in to continue</h1>
                        <button className="bg-slate-950 hover:bg-blue-700 mt-3 h-10 w-20"  type='button' onClick={()=>signIn()}>Sign In</button>
                    </div>
                )}
            </div>
        
    )
}