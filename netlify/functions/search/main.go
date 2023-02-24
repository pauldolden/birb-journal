package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	const BASE_URL = "https://api.themoviedb.org/3"

	searchTerm := request.QueryStringParameters["query"]
	searchType := request.QueryStringParameters["type"]
	page := request.QueryStringParameters["page"]

	tmbdKey := os.Getenv("VITE_TMDB_KEY")
	path := fmt.Sprint(BASE_URL, "/search/", searchType, "?query=", searchTerm, "&api_key=", tmbdKey, "&page=", page)

	results, err := fetch(path)

	if err != nil {
		return nil, err
	}

	jsonStr, _ := json.Marshal(results)

	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(jsonStr),
		Headers: map[string]string{
			"Access-Control-Allow-Origin": "*",
			"Content-Type":                "application/json",
		},
	}, nil
}

func fetch(path string) (interface{}, error) {
	var results interface{}

	resp, err := http.Get(path)
	if err != nil {
		return results, err
	}
	defer resp.Body.Close()
	err = json.NewDecoder(resp.Body).Decode(&results)
	if err != nil {
		return results, err
	}
	return results, nil
}

func main() {
	lambda.Start(handler)
}
