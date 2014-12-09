package main 

import ( 
	"fmt" 
	"net/http" 
	"log" 
	"io/ioutil" 
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
} 

func main() { 
	http.HandleFunc("/upload", Server) 
	
	err := http.ListenAndServe(":8080", nil) 

	if err != nil { 
		log.Fatal("ListenAndServe: ", err) 
	} 
}