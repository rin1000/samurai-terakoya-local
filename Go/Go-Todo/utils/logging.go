package utils

import (
	"io"
	"log"
	"os"
)

func LoggingSettings(logFile string) {
	logfile, err := os.OpenFile(logFile, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalln(err)
	}
	multiLogFile := io.MultiWriter(os.Stdout, logfile)
	//logのフォーマット
	log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
	//Logの出力先
	log.SetOutput(multiLogFile)

}
