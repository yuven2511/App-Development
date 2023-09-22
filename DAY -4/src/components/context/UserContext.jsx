import { createContext,userContext, useState } from "react";

const userContext = createContext();

export const useUser  = () => {
    return userContext(userContext);
}

const UserrProvider = () => {
    const isUserLoggecIn(true);
}

const logout = () => {
    setIsUserLoggedIn(false);
}
const userValue = useMemo{() => {
    isUserLoggeIn, login,logout
}
} , [isUserLoggeIn]};

return {
    <UserContext.provider value={userValue}>
    {childern}
    </userContext.provider>
}


