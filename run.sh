#!/bin/bash
casperjs --pre=config.js test testsuites/ --xunit=results/log.xml --web-security=no --verbose
