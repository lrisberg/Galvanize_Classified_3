(function() {
  angular
    .module('app')
    .service('clService', clService)

  function clService($http) {
    const BASE_URL = '/api/classifieds'

    this.getAds = function() {
      return $http.get(BASE_URL).then((response) => {
        response.data.forEach((ad) => {
          ad.created_at = moment(ad.created_at);
        });
        return response.data;
      });
    };

    this.getAd = function(adId) {
      return $http.get(`${BASE_URL}/${adId}`).then((response) => {
        return response.data;
      });
    };

    this.createAd = function(newAd) {
      return $http.post(BASE_URL, newAd).then((response) => {
        return response.data;
      });
    };

    this.updateAd = function(ad) {
      return $http.patch(`${BASE_URL}/${ad.id}`, ad).then((response) => {
        return response.data;
      });
    };

    this.deleteAd = function(adId) {
      return $http.delete(`${BASE_URL}/${adId}`, adId).then((response) => {
        return response.data;
      });
    };
  }
  clService.$inject = ["$http"];
})();
