import axios, { AxiosResponse } from "axios";
import { BudgetsInterface } from "../interfaces/budgetsInterface";

export const options = {
  headers: {
    Authorization: "Bearer odh5mG3V332Drs7NwoGJz0XRXKlOoQgYonWNxieE",
    "X-Bridge-Settings":
      "gAAAAABjDlJApy_5HrRIuXa70jw4jBGUIzOUq-mEcDSlXiJHwgOjIDCzbbwLeucEBLUxxVZm5a2Alw3xCwpb3NnwunZUkROTWLF9rdBnyocZEFHw0luFRIhAU44P9To5v7R7_SRxlM1wUqkPpGb_HVUDm0oqVvXspWbDzhwxgbGWBaE6DgTcT0tX3nzz_2qpt1TmC9G1BAbv0ouZQPJl6qbxWn0gaBGOgkV-_msKWvJinE3GgyN7zL0C5BlOlJPDEz7T44mCzfQ0EUUr1vGk6178aDVzZj5THW5Xv3F7xRqC4iivg3rLFNki16LMQrZsAEtC9xKHeJ0mfksNc2ku6171Q_q8j8UkhlwtkOZr9KGJ4tJHq8LWuNytd581UT2LwW74ifXyJbBYPvMx-GLVdGEtJYmXuQz5bcCWR6amvRDQ9xsH_Y7cMwBr42txgNYMUXFGXs2NhMbygRCG8lkeSC_TNcMKolWLrd3MdDw7edn9pXx4XMDjM9I77DoLJNbMuTpwd-XqxDzyNDj8yCP8GsWm1JZLYUi_og==YMoDW/XHWWa55nCSlzYbQQ==",
  },
};

export const getBudgets = async (
  id
): Promise<AxiosResponse<BudgetsInterface>> => {
  const response = await axios.get(
    `https://data.jetadmin.io/projects/da_vinci/prod/jet_database_8fl3/models/budget_generation/${id}/`,
    {
      headers: {
        Authorization: options.headers.Authorization,
        // "X-Bridge-Settings": options.headers["X-Bridge-Settings"],
      },
    }
  );

  return response;
};
