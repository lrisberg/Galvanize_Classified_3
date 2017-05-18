(function() {

  angular
    .module('app')
    .component('clNav', {
      controller: 'clNavController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clNav.html'
    })

    .component('clMain', {
      controller: 'clMainController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clMain.html'
    })

    .component('clAd', {
      bindings: {
        'ad': '=',
        'ads': '='
      },
      controller: 'clAdController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clAd.html'
    })

    .component('clNewAdForm', {
      bindings: {
        'ads': '=',
        'showForm': '='
      },
      controller: 'clNewAdFormController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clNewAdForm.html'
    })

    .component('clEditAd', {
      bindings: {

      },
      controller: 'clEditAdController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clEditAd.html'
    })

    .component('clFilterSort', {
      bindings: {
        'sortOption': '=',
        'sortOptions': '=',
        'filter': '='
      },
      controller: 'clFilterSortController',
      controllerAs: '$ctrl',
      templateUrl: '/views/clFilterSort.html'
    })
})();
