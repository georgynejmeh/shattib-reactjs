export interface Cirteria {
  id: number;
  title: string;
  status: string;
  criteriaItems: [
    {
      categoryId: number;
      categoryName: string;
      productName: string;
      description: string;
      amount: number;
      measurementUnit: string;
      image: string;
    }
  ];
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
