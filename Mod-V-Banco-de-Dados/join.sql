-- Active: 1656430386048@@127.0.0.1@3306@dio_db
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video; 
SELECT v.nome_video, v.autor_video, c.nome_canal FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal; 