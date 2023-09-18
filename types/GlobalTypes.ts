// Cart Item, State Context
// Cart Page Comp, Cart Product
type CartProductType = {
  id: number;
  quantity: number;
  Total_Price: number;
  Name: string;
  Price: number;
  Product_Image: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    }[];
  };
};

// Found Product, State Context
type foundProductType = {
  quantity: number;
  Total_Price: number;
  Price: number;
};

// Product Card, Best Seller - Homepage
type ProductCardType = {
  product: {
    data: {
      id: number;
      attributes: {
        Name: string;
        Price: number;
        Short_Description: string;
        slug: string;
      };
    };
  };
  Product_Thumbnail: {
    data: {
      attributes: {
        formats: {
          small: {
            url: string;
          };
        };
      };
    };
  };
};

// Category Product Card, Popular Categories - Homepage
type ProductCategoryCardType = {
  Title: string;
  Description: string;
  Icon: {
    data: {
      attributes: {
        url: string;
        formats: {
          thumbnail: {
            url: string;
          };
          medium: {
            url: string;
          };
        };
      };
    };
  };
};

type BannerDataType = {
  Short_Text: string;
  Mid_Text: string;
  Big_Text: string;
  Description_Title: string;
  Description_Text: string;
  CTA_Button: {
    Button_Text: string;
    Button_Link: string;
  };
  BannerImage: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
};

// Add to Cart Button, Product Page
// Shop Product Card, Shop Page

type ProductType = {
  id: number;
  Name: string;
  Price: number;
  Short_Description: string;
  slug: string;
  Product_Image:
    | {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
              small: {
                url: string;
              };
            };
          };
        }[];
      }
    | any;
};

type OfferDetailsType = {
  valid: boolean;
  discountAmount: number;
  discountPercentage: number;
  maxDiscount: number;
  offerName: string;
  offerType: string;
} | null;

// Instamojo Payment Options Types
type RequestOptions = {
  method: "POST";
  headers: any;
  body: URLSearchParams;
};

type BodyParams = {
  amount: string;
  purpose: string;
  buyer_name: string;
  email: string;
  phone: string;
  redirect_url: string;
  webhook: string;
  allow_repeated_payments: boolean;
  send_email: boolean;
  send_sms: boolean;
  expires_at: string;
};

export type {
  CartProductType,
  foundProductType,
  ProductCardType,
  ProductCategoryCardType,
  BannerDataType,
  ProductType,
  OfferDetailsType,
  RequestOptions,
  BodyParams,
};
