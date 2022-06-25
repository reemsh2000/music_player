import { Component } from '@angular/core';
import { songs } from './utill/songs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Check if Playing
  isPlaying: boolean = false;
  iconClass: string = 'fa-play';
  title: string = 'Play';
  songIndex: number = 0;
  allSongs: any[];
  currentSongName: String = 'jacinto-1';
  progressWidth:number =0;
  duration:string =""
  currentTime:string="0:00"
  constructor() {
    this.allSongs = songs;
  }
  playSong(audio: any) {
    this.isPlaying = !this.isPlaying;
    this.iconClass = !this.isPlaying ? 'fa-play' : 'fa-pause';
    this.title = !this.isPlaying ? 'Pause' : 'Play';
    console.log(audio.currentTime)
    this.isPlaying ? audio.play() : audio.pause();
  }

  // Previous Song
  prevSong(audio: any) {
    this.isPlaying = false;
    this.songIndex--;
    if (this.songIndex < 0) {
      this.songIndex = this.allSongs.length - 1;
    }
    this.currentSongName = this.allSongs[this.songIndex].name;
    this.playSong(audio);
  }

  // Next Song
  nextSong(audio: any) {
    this.isPlaying = false;
    this.songIndex++;
    if (this.songIndex > this.allSongs.length - 1) {
      this.songIndex = 0;
    }
    this.currentSongName = this.allSongs[this.songIndex].name;
    this.playSong(audio);
  }

  setProgressBar(e:any) {
    // const width = this.clientWidth;
    // const clickX = e.offsetX;
    // const { duration } = music;
    // music.currentTime = (clickX / width) * duration;
  }
  updateProgressBar(e:any) {
    let durationSecondsInWords
    // if (this.isPlaying) {
    //   const { duration, currentTime } = e.srcElement;
    //   // Update progress bar width
    //   const progressPercent = (currentTime / duration) * 100;
    //   this.progressWidth = progressPercent;
    //   // Calculate display for duration
    //   const durationMinutes = Math.floor(duration / 60);
    //   let durationSeconds = Math.floor(duration % 60);
    //   if (durationSeconds < 10) {
    //     durationSecondsInWords = `0${durationSeconds}`;
    //   }
    //   // Delay switching duration Element to avoid NaN
    //   if (durationSeconds) {
    //     this.duration = `${durationMinutes}:${durationSecondsInWords}`;
    //   }
    //   // Calculate display for currentTime
    //   const currentMinutes = Math.floor(currentTime / 60);
    //   let currentSeconds = Math.floor(currentTime % 60);
    //   // if (currentSeconds < 10) {
    //   //   currentSeconds = `0${currentSeconds}`;
    //   // }
    //   this.currentTime = `${currentMinutes}:${currentSeconds}`;
    // }
    console.log('www',e.readyState)
  }
}
