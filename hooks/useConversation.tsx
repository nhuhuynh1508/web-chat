// this hook detects if a conversation is active by checking the conversationID in the URL parameter
"use client";
import React, { useState, createContext, use, useContext } from "react";

type ConversationContextType = {
    isActive: boolean;
    conversationID: string;
    setConversationID: (id: string) => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider = ({children}: {children: React.ReactNode}) => {
    const [conversationID, setConversationID] = useState<string>("");
    // !! to convert to boolean
    const isActive = !!conversationID;
    
    return (
        <ConversationContext.Provider value={{conversationID, setConversationID, isActive}}>
            {children}
        </ConversationContext.Provider>
    );
}

export const useConversation = () => {
    const context = useContext(ConversationContext);
    if (!context) {
        throw new Error("useConversation must be used within a ConversationProvider");
    }
    
    return context;
}