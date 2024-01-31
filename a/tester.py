import time
import subprocess

def stop_appium_server(process):
    print("Stopping Appium server...")
    process.terminate()

def run_js_test():
    uninstall1 = subprocess.Popen(["adb", "uninstall", "io.appium.uiautomator2.server"],
                               stdout=subprocess.PIPE, 
                               stderr=subprocess.PIPE)
    uninstall2 = subprocess.Popen(["adb", "uninstall", "io.appium.uiautomator2.server.test"],
                               stdout=subprocess.PIPE, 
                               stderr=subprocess.PIPE)
    process = subprocess.Popen(["node", "test.js"],
                               stdout=subprocess.PIPE, 
                               stderr=subprocess.PIPE)

    print(uninstall1.stdout.read())
    print(uninstall2.stdout.read())

    while True:
        output = process.stdout.readline()
        if output == '' and process.poll() is not None:
            break
        if output:
            if "error" in output.strip().decode():
                print(output)
                handle_specific_condition()

def handle_specific_condition():
    print("Handling specific condition...")

if __name__ == "__main__":
    try:
        run_js_test()
    finally:
        stop_appium_server(appium_process)
