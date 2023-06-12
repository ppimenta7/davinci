export interface BudgetCompiledInterface {
    id:                     number;
    "Comments/Report":      string;
    value:                  number;
    expiration_date:        Date;
    "Password/Access Code": string;
    title:                  string;
    version:                number;
    discount:               number;
    payment_conditions:     string;
    creation_date:          Date;
    additional_costs:       number;
    tax_percentage:         number;
    budget_id:              string;
    products:               number[];
    customer:               string;
    customer_full_name:     string;
    customer_json:          CustomerJSON;
    products_json:          ProductsJSON[];
}

export interface CustomerJSON {
    customer_id:                 number;
    customer_full_name:          string;
    customer_address:            string;
    customer_birth_date:         Date;
    customer_cpf:                string;
    customer_dr_responsible:     string;
    customer_type_of_amputation: string;
    customer_reference:          string;
}

export interface ProductsJSON {
    id:                    number;
    sku:                   string;
    image:                 string;
    details:               string;
    category:              number[];
    technical_description: string;
    link_video:            string;
    short_description:     string;
    value:                 number;
    name:                  string;
}
