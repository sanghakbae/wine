#!/bin/sh
# 렌더한 프레임(out/frames)과 게임 음악(assets/music_raw.wav)을 30초 MP4 로 합친다.
#   sh promo/make_video.sh
set -e
cd "$(dirname "$0")"
OUT=out/blind-bottle-promo-30s.mp4
# 음악: 30초로 자르고 SNS 기준 음량(-14 LUFS)으로 맞춘다 (끝 1.5초 페이드는 렌더 때 이미 들어가 있다)
ffmpeg -v error -y -i assets/music_raw.wav -t 30 -af "loudnorm=I=-14:TP=-1.5:LRA=11" -ar 48000 out/music_30s.wav
ffmpeg -v error -y -framerate 30 -i out/frames/%04d.png -i out/music_30s.wav \
  -c:v libx264 -preset slow -crf 17 -pix_fmt yuv420p -profile:v high -movflags +faststart \
  -c:a aac -b:a 192k -shortest "$OUT"
ffprobe -v error -show_entries format=duration,size:stream=codec_name,width,height,r_frame_rate -of compact "$OUT"
