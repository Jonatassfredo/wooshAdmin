export class ConfigHelper {
  public static Url: string = "https://woosh-api.herokuapp.com/api/";
  //public static Url: string = 'http://localhost:3000/api/'

  public static photo: string = "";

  public static storageKeys = {
    token: "delivery.token",
    user: "delivery.user",
    selectCategory: "Woosh.select.category",
    oneSignalUid: "Woosh.onesignal"
  };

  public static Events = {
    atualizaoQuantidadeProduto: "atualizacao.quantidade.produto"
  };
}
