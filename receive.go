package main 

import ( 
	"fmt" 
	"net/http" 
	"log" 
	"io/ioutil" 
	"time"
	"os"
) 

// hello world, the web server 
func Server(w http.ResponseWriter, req *http.Request) { 

	file, handler, err := req.FormFile("file") 
	if err != nil { 
		fmt.Println(err) 
	} 

	data, err := ioutil.ReadAll(file) 
	if err != nil { 
		fmt.Println(err) 
	}

	err = ioutil.WriteFile(handler.Filename, data, 0777) 
	if err != nil { 
		fmt.Println(err) 
	}

	var s string

	s = handler.Filename

	fmt.Println("Upload: " + s)

	foo := os.Rename("/Users/tony/uploader/" + s, "/Users/tony/uploader/images/" + s)
	if foo != nil {
		fmt.Println(err)
	}
	
} 

func main() { 
	fmt.Println(time.Now())

	http.HandleFunc("/upload", Server) 
	
	err := http.ListenAndServe(":8080", nil) 

	if err != nil { 
		log.Fatal("ListenAndServe: ", err) 
	} 
}