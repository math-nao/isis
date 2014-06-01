MOCHA_OPTS= --check-leaks --globals "setImmediate,clearImmediate"
REPORTER = dot

check: test

test: test-unit

test-unit:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)
	
docs: test-docs

test-docs:
	make test REPORTER=doc \
		| cat docs/fragments/header.html - docs/fragments/footer.html \
		> docs/test.html

.PHONY: check test test-unit docs test-docs
