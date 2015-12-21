/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
(function() {
	"use strict";
	//var angular: any;
	var app = angular.module("homeIndexApp", ["ngRoute"]);
	app.controller("homeIndexCtrl", ($scope, $http) => {
		
		$scope.testAlert = () => {

			var songs = [
				new Song('Bushbaby', 'Megaphone'),
				new Song('Delays', 'One More Lie In'),
				new Song('Goober Gun', 'Stereo'),
				new Song('Sohnee', 'Shatter'),
				new Song('Get Amped', 'Celebrity')
			];

			var jukebox = new Jukebox(songs);

			jukebox.play();
		}
	});

	class Song {
		constructor(private artist: string, private title: string) {
		}

		play() {
			console.log("Playing " + this.title + ' by ' + this.artist);
		}
	}

	class Jukebox {
		constructor(private songs: Song[]) {
		}

		play() {
			var song = this.getRandomSong();
			song.play();
		}

		private getRandomSong() {
			var songCount = this.songs.length;
			var songIndex = Math.floor(Math.random() * songCount);

			return this.songs[songIndex];
		}
	}

})();
//# sourceMappingURL=homeIndex.js.map