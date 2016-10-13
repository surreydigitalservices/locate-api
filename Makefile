
.PHONY: test

test:
	mvn test

run:
	./run-api.sh

run-debug:
	./run-debug-api.sh
