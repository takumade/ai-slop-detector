import { AIProviderSettings } from "@/types/settings";




class AIProvider {
    aiSettings: AIProviderSettings;

    
    constructor(aiSettings: AIProviderSettings) {
        this.aiSettings = aiSettings;
    }


    async summarizeText(text: string) {
        
    }


    async detectSlop(text: string) {
        
    }

    async analyzePost(text: string) {
        
    }




    
}

export default AIProvider;
