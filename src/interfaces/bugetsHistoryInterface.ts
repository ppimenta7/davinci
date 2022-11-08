export interface BugetsHistoryInterface {
    id:                    string;
    budget_generations_id: string;
    products:              number[];
    comments_report:       string;
    value:                 string;
    expiration_date:       Date;
    password_access_code:  string;
    customer:              string;
    title:                 string;
    version:               string;
    discount:              string;
    payment_conditions:    string;
    creation_date:         Date;
}