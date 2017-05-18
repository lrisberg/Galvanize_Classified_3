(function() {
  angular
    .module('app')
    .controller('clNavController', clNavController)
    .controller('clMainController', clMainController)
    .controller('clAdController', clAdController)
    .controller('clNewAdFormController', clNewAdFormController)
    .controller('clEditAdController', clEditAdController)
    .controller('clFilterSortController', clFilterSortController)

  function clNavController() {
    const vm = this;
  }

  function clMainController(clService) {
    const vm = this;

    vm.$onInit = function() {
      clService.getAds().then(function(response) {
        vm.ads = response;
      })
    }

    vm.toggleForm = function() {
      vm.showForm = !vm.showForm;
    }

    vm.sortOptions = [{
      display: 'Price (Lowest to Highest)',
      property: 'price'
    },
    {
      display: 'Price (Highest to Lowest)',
      property: '-price'
    },
    {
      display: 'Newest',
      property: '-created_at'
    },
    {
      display: 'Oldest',
      property: 'created_at'
    }]

    vm.sortOption = vm.sortOptions[1]
  }

  clMainController.$inject = ['clService'];

  function clAdController(clService, $state) {
    const vm = this;

    vm.deleteAd = function() {
      clService.deleteAd(vm.ad.id).then((response) => {
        let adId = vm.ad.id;
        let adIndex = vm.ads.indexOf(vm.ad);
        vm.ads.splice(adIndex);
      })
    }
  }

  clAdController.$inject = ['clService', '$state'];

  function clNewAdFormController(clService) {
    const vm = this;

    vm.createAd = function() {
      clService.createAd(vm.newAd).then((response) => {
        vm.ads.push(response);
        delete vm.newAd;
        vm.showForm = false;
      })
    }
  }

  clNewAdFormController.$inject = ['clService'];

  function clEditAdController(clService, $stateParams, $state) {
    const vm = this;

    vm.$onInit = function() {
      clService.getAd($stateParams.ad_id).then((response) => {
        vm.editedAd = response;
      })
    }

    vm.updateAd = function() {
      clService.updateAd(vm.editedAd).then((response) => {
        $state.go('home');
      });
    };
  }

  clEditAdController.$inject = ['clService', '$stateParams', '$state'];

  function clFilterSortController() {
    const vm = this;
  }
})();
