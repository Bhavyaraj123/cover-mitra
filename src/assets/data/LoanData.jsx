    import loan from '../../assets/loan/cl.jpg'
    import personalLoan from '../../assets/loan/pa.jpeg';
import homeLoan from '../../assets/loan/HL.jpeg';
import educationLoan from '../../assets/loan/ed.jpeg';
import businessLoan from '../../assets/loan/bl.jpg';
import carLoan from '../../assets/loan/cl.jpg';
    const LoanData = [
        {
          "image": "pa.jpeg",
          "name": "Personal Loan",
          "description": "An unsecured loan for various personal needs like travel, marriage, or emergencies.",
          "benefits": [
            "No collateral required",
            "Quick disbursal",
            "Flexible tenure options"
          ],
          "loanProcess": [
            "Fill online application",
            "Submit KYC & income documents",
            "Verification & approval",
            "Loan disbursed to your account"
          ],
          "eligibility": [
            "Minimum age: 21 years",
            "Stable income source",
            "Good credit history"
          ],
          "idealFor": "Salaried individuals, self-employed, and those needing urgent funds"
        },
        {
          "image": "HL.jpeg",
          "name": "Home Loan",
          "description": "A secured loan to help you buy or construct your dream house.",
          "benefits": [
            "Low interest rates",
            "Longer repayment tenure",
            "Tax benefits on EMI payments"
          ],
          "loanProcess": [
            "Choose property & apply",
            "Submit required documents",
            "Property valuation & approval",
            "Loan disbursement"
          ],
          "eligibility": [
            "Minimum age: 21 years",
            "Regular income from job or business",
            "Clear property documents"
          ],
          "idealFor": "Home buyers, renovators, and investors in real estate"
        },
        {
          "image": "ed.jpeg",
          "name": "Education Loan",
          "description": "Finance your higher education in India or abroad with an easy education loan.",
          "benefits": [
            "Covers tuition, living, and travel costs",
            "Moratorium period available",
            "Tax benefits under Section 80E"
          ],
          "loanProcess": [
            "Apply online with admission proof",
            "Submit academic and financial documents",
            "Verification & sanction",
            "Fees directly paid to institution"
          ],
          "eligibility": [
            "Indian nationality",
            "Admission to recognized institution",
            "Co-applicant with stable income (if required)"
          ],
          "idealFor": "Students pursuing higher education"
        },
        {
          "image": "bl.jpg",
          "name": "Business Loan",
          "description": "Fuel your business growth with a flexible unsecured business loan.",
          "benefits": [
            "Collateral-free funding",
            "Fast approval",
            "Customizable loan amount and tenure"
          ],
          "loanProcess": [
            "Submit business plan & financials",
            "Verification & credit check",
            "Approval & disbursement"
          ],
          "eligibility": [
            "Business vintage: 1+ year",
            "Minimum turnover criteria",
            "Valid business registration"
          ],
          "idealFor": "Startups, SMEs, and entrepreneurs"
        },
        {
          "image": "cl.jpg",
          "name": "Car Loan",
          "description": "Finance your dream car with an affordable car loan.",
          "benefits": [
            "Up to 100% funding on select models",
            "Low interest rates",
            "Quick approval"
          ],
          "loanProcess": [
            "Choose car & loan type",
            "Apply and upload documents",
            "Verification & loan approval",
            "Payment to car dealer"
          ],
          "eligibility": [
            "Minimum age: 21 years",
            "Income proof & valid license",
            "Good credit score"
          ],
          "idealFor": "First-time car buyers or upgrading users"
        }
      ];
      
      export default LoanData