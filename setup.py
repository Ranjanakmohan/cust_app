from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in cust_app/__init__.py
from cust_app import __version__ as version

setup(
	name="cust_app",
	version=version,
	description="my app",
	author="momscode",
	author_email="info@momscode.in",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
