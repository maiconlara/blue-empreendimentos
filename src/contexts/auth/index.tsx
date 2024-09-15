// "use client";

// import {createContext, ReactNode, useEffect, useReducer, useRef} from "react";
// import {useSession} from "next-auth/react";
// import {factory} from "./factory";
// import {reducer} from "./reducer";
// import {AxiosError} from "axios";
// import {User} from "@/types";
// import {api} from "@/lib/api";

// export type AuthState = {
//   user: User | null;
//   isLoading: boolean;
// };

// export type AuthActions = {
//   setUser: (user: User | null) => void;
// };

// const initialState: AuthState = {
//   user: null,
//   isLoading: true,
// };

// type AuthContextProviderProps = {
//   children: ReactNode;
// };

// export const AuthContext = createContext<[AuthState, AuthActions] | null>(null);

// export function AuthContextProvider({children}: AuthContextProviderProps) {
//   const {data: session} = useSession();
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const actions = useRef(factory(dispatch));
//   const {setUser} = actions.current;
//   const {user} = state;

//   const getUserSession = async (): Promise<User | null | undefined> => {
//     try {
//       const {data} = await api.get(`/users?email=${session?.user?.email}`);
//       let user = data.users?.[0];

//       if (!user) {
//         const postUser = {
//           name: session?.user?.name,
//           email: session?.user?.email,
//           function: "Boticário",
//           parent_id: null,
//           phone: null,
//         };

//         const {data: postData} = await api.post(`/users`, postUser);
//         user = postData;
//       }

//       const loginAccess = {
//         userId: user.id,
//         userEmail: user.email,
//         name: user.name,
//         userType: user.function,
//       };
//       await api.post("/access-log", loginAccess);

//       return user;
//     } catch (error: any) {
//       console.log("error");
//       const axiosError = error as AxiosError;
//       if (axiosError.response?.status === 409) {
//         return;
//       }
//       return null;
//     }
//   };

//   const sendAccessLog = async (userId: number) => {
//     try {
//       await api.put("/access-log/update", {userId});
//     } catch (error) {
//       console.error("Failed to send access log", error);
//     }
//   };

//   useEffect(() => {
//     if (!user) return;

//     const intervalId = setInterval(() => {
//       sendAccessLog(user.id);
//     }, 100000);

//     return () => clearInterval(intervalId);
//   }, [user]);

//   useEffect(() => {
//     if (!session) return;
//     if (user) return;
//     getUserSession().then((userSession) => {
//       if (userSession) {
//         setUser(userSession);
//       }
//     });
//   }, []);

//   return (
//     <AuthContext.Provider value={[state, actions.current]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
