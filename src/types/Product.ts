export interface Product {
    referrer: string;
    orderDetails: OrederDetail;
}

export type OrederDetail = {
    name: string;
    count: number
};
