export interface Cirteria {
  id: number;
  title: string;
  status: string; // Pending , Rejected, Accepted
  criteriaItems: CirteriaItem[];
  comments: [
    {
      id: number;
      userId: string;
      message: string;
      attachment: string;
    }
  ];
  invoices: [
    {
      id: number;
      image: string;
      accepted: boolean;
    }
  ];
}

export interface CirteriaItem {
  categoryId: number;
  productName: string;
  description: string;
  amount: number;
  measurementUnit: string;
}

export interface PostCriteria {
  Title: string;
  CriteriaItems: CirteriaItem[];
}

export interface CirteriaGet {
  id: number;
  title: string;
  status: string; // Pending , Rejected, Accepted
  criteriaItems: CirteriaItemGet[];
  comments: [
    {
      id: number;
      userId: string;
      message: string;
      attachment: string;
    }
  ];
  invoices: [
    {
      id: number;
      image: string;
      accepted: boolean;
    }
  ];
}

export interface CirteriaItemGet {
  categoryId: number;
  productName: string;
  description: string;
  amount: number;
  measurementUnit: string;
  image: string;
}
