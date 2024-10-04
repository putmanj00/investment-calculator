export interface InvestmentInput {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}

// Can be defined as a type instead of interface as well
// export type InvestmentInput = {
//     initialInvestment: number;
//     duration: number;
//     expectedReturn: number;
//     annualInvestment: number;
// }