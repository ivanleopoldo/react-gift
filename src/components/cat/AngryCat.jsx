import { motion } from "framer-motion";

function AngryCat() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <motion.svg
        width="200"
        height="200"
        initial={{ y: -5 }}
        animate={{ y: 5 }}
        transition={{
          duration: 0.1,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_5_3)">
          <path
            d="M53 4C61.2473 9.2953 67.9385 15.4328 74.3125 22.8125C98.3655 50.3699 130.294 60.3632 166 63C170.413 63.1445 174.823 63.157 179.239 63.1611C181.173 63.1686 181.173 63.1686 183.146 63.1762C186.659 63.1892 190.173 63.1957 193.686 63.2002C195.894 63.2031 198.103 63.2073 200.311 63.2117C207.259 63.2253 214.206 63.235 221.154 63.2389C229.101 63.2434 237.048 63.2608 244.995 63.2899C251.184 63.3117 257.372 63.3216 263.56 63.3229C267.234 63.324 270.908 63.3296 274.581 63.3478C316.398 63.5429 357.535 59.1778 388.688 28.5C392.034 25.0766 395.197 21.5259 398.328 17.9062C406.687 8.3755 415.821 0.75558 428.844 -0.316406C443.572 -0.9277 443.572 -0.9277 449 4C462.928 20.2496 458.9 48.3733 457.574 68.4805C455.957 88.4659 452.621 108.244 449.438 128.026C447.797 138.23 446.208 148.441 444.643 158.657C444.203 161.525 443.756 164.393 443.31 167.26C440.905 182.84 438.923 198.42 438.375 214.187C438.336 215.151 438.298 216.115 438.258 217.107C438.166 219.405 438.08 221.702 438 224C438.886 223.942 439.771 223.884 440.684 223.824C453.367 223.362 468.004 225.416 478 234C483.308 239.165 485.108 246.13 485.398 253.375C485.406 255.25 485.398 257.125 485.375 259C485.387 259.933 485.398 260.867 485.41 261.828C485.372 270.929 483.555 278.598 477.109 285.27C468.611 292.241 457.618 291.719 447.182 291.229C443.951 290.89 441.077 290.028 438 289C437.966 289.551 437.931 290.102 437.896 290.67C435.677 324.047 427.589 354.087 402.375 377.5C389.78 388.074 374.662 396.669 360 404C366.861 406.311 372.719 408.137 380 408C385.02 409.073 389.529 410.561 393.875 413.312C394.906 413.869 395.938 414.426 397 415C400.369 413.875 402.188 411.866 404.5 409.25C411.633 401.903 420.872 397.934 431.062 397.75C442.03 397.868 453.076 401.097 461.449 408.387C463.424 410.441 465.089 412.67 466.812 414.937C472.592 422.321 479.757 427.084 489 429C494.903 429.705 498.785 429.053 504 426C504.66 426 505.32 426 506 426C503.588 435.97 497.813 442.852 489.188 448.375C480.024 453.422 470.18 456.149 459.727 456.098C458.573 456.094 457.419 456.091 456.23 456.088C455.041 456.08 453.851 456.071 452.625 456.062C451.412 456.058 450.199 456.053 448.949 456.049C445.966 456.037 442.983 456.021 440 456C454.482 472.3 469.056 483.118 490 490C487.967 494.601 485.726 497.629 482 501C481.299 501.66 480.598 502.32 479.875 503C469.346 510.325 458.265 512.385 445.688 512.312C444.671 512.307 443.654 512.301 442.606 512.295C427.371 512.049 415.155 507.623 403.938 497.066C394.852 487.377 391.895 473.744 391.875 460.75C391.916 459.512 391.957 458.275 392 457C391.196 457.351 390.391 457.701 389.562 458.062C384.295 459.449 379.284 459.142 374.375 456.687C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.154 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C106.802 463.577 106.802 463.577 88.8945 447.117C83.5578 441.153 79.87 434.059 80 426C80.9885 419.541 83.5982 415.542 88.6875 411.5C94.6169 407.654 101.253 405.891 108 404C106.97 403.478 105.94 402.956 104.879 402.418C94.1423 396.897 84.0286 390.715 74 384C73.8414 385.016 73.6829 386.032 73.5195 387.078C71.6894 398.132 69.5524 410.058 61 418C53.3253 422.047 45.7347 422.227 37.25 422.312C36.3116 422.341 35.3731 422.371 34.4062 422.4C27.0289 422.467 19.8486 421.312 14.0857 416.353C6.7864 408.673 5.66317 398.515 5.78905 388.344C6.51674 376.809 9.52246 363.658 18.3125 355.5C25.9307 349.761 33.6723 347.845 43 348C42.4373 346.741 42.4373 346.741 41.8633 345.457C38.6868 337.992 36.1651 330.576 34.25 322.687C33.9528 321.501 33.9528 321.501 33.6496 320.29C30.3119 305.888 29.7109 291.191 29.695 276.47C29.6913 273.663 29.6743 270.857 29.6543 268.05C29.5998 260.083 29.5685 252.116 29.5437 244.148C29.4662 221.59 29.2743 199.368 26 177C25.7552 175.306 25.7552 175.306 25.5055 173.577C24.4725 166.53 23.3621 159.496 22.2122 152.467C21.4027 147.515 20.611 142.56 19.8183 137.605C19.4244 135.144 19.0298 132.682 18.6344 130.221C16.2714 115.501 14.0071 100.773 12 86C11.8701 85.0785 11.7402 84.157 11.6064 83.2075C9.8722 70.5359 9.77496 57.8314 9.68749 45.0625C9.67291 43.8042 9.67291 43.8042 9.65804 42.5204C9.38237 14.4892 9.38237 14.4892 17.3008 5.55469C26.7089 -3.05324 42.386 -2.25278 53 4Z"
            fill="#F9A93B"
          />
          <path
            d="M460 407.125C462.666 409.446 464.678 412.129 466.813 414.938C472.592 422.321 479.757 427.084 489 429C494.903 429.705 498.785 429.053 504 426C504.66 426 505.32 426 506 426C503.588 435.97 497.813 442.852 489.188 448.375C480.024 453.422 470.18 456.149 459.727 456.098C458.573 456.094 457.419 456.091 456.23 456.088C455.041 456.08 453.851 456.071 452.625 456.063C451.412 456.058 450.199 456.053 448.949 456.049C445.966 456.037 442.983 456.021 440 456C454.483 472.3 469.056 483.118 490 490C487.967 494.601 485.726 497.629 482 501C481.299 501.66 480.598 502.32 479.875 503C469.346 510.325 458.265 512.385 445.688 512.313C444.671 512.307 443.654 512.301 442.606 512.295C427.371 512.049 415.155 507.623 403.938 497.066C394.852 487.377 391.895 473.744 391.875 460.75C391.916 459.513 391.958 458.275 392 457C391.196 457.351 390.391 457.701 389.563 458.063C384.295 459.449 379.284 459.142 374.375 456.688C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.154 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C106.802 463.577 106.802 463.577 88.8946 447.117C83.5578 441.153 79.8701 434.059 80 426C80.9881 419.544 83.5958 415.547 88.6797 411.504C95.7094 406.948 103.295 404.997 111.595 404.688C112.692 404.647 113.79 404.606 114.92 404.563C116.102 404.524 117.285 404.486 118.502 404.446C119.745 404.404 120.988 404.362 122.269 404.318C135.833 403.893 149.391 403.856 162.961 403.867C164.997 403.867 167.032 403.865 169.068 403.864C177.756 403.858 186.444 403.865 195.133 403.873C198.134 403.876 201.135 403.878 204.136 403.879C242.015 403.903 279.896 403.95 317.775 404.264C321.776 404.298 325.777 404.325 329.779 404.346C334.408 404.371 339.037 404.411 343.667 404.463C345.325 404.48 346.984 404.491 348.643 404.498C356.42 404.531 363.665 404.61 371.061 407.362C373.214 408.182 373.214 408.182 376.5 408C382.795 408 388.573 409.956 393.875 413.313C395.422 414.148 395.422 414.148 397 415C400.369 413.875 402.188 411.866 404.5 409.25C419.661 393.634 443.133 395.178 460 407.125Z"
            fill="#9AE79C"
          />
          <path
            d="M460 407.125C462.666 409.446 464.678 412.129 466.812 414.938C472.592 422.321 479.757 427.084 489 429C494.903 429.705 498.785 429.053 504 426C504.66 426 505.32 426 506 426C503.588 435.97 497.813 442.852 489.188 448.375C480.024 453.422 470.18 456.149 459.727 456.098C458.573 456.094 457.419 456.091 456.23 456.088C455.041 456.08 453.851 456.071 452.625 456.063C451.412 456.058 450.199 456.053 448.949 456.049C445.966 456.037 442.983 456.021 440 456C454.482 472.3 469.056 483.118 490 490C487.967 494.601 485.726 497.629 482 501C481.299 501.66 480.598 502.32 479.875 503C469.346 510.325 458.265 512.385 445.688 512.313C444.671 512.307 443.654 512.301 442.606 512.295C427.371 512.049 415.155 507.623 403.938 497.066C394.852 487.377 391.895 473.744 391.875 460.75C391.916 459.513 391.957 458.275 392 457C391.196 457.351 390.391 457.701 389.562 458.063C384.295 459.449 379.284 459.142 374.375 456.688C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.154 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C134.302 463.493 134.302 463.493 113 459C113 458.67 113 458.34 113 458C151.797 454.899 190.56 454.549 229.461 454.393C233.859 454.375 238.256 454.349 242.654 454.324C245.69 454.309 248.727 454.305 251.764 454.302C262.617 454.26 273.214 453.677 283.975 452.258C286.848 451.892 289.727 451.586 292.608 451.281C300.614 450.414 308.492 449.127 316.387 447.524C319.587 446.882 322.792 446.267 325.996 445.648C328.56 445.142 331.124 444.634 333.688 444.125C334.899 443.893 336.11 443.66 337.358 443.421C345.677 441.74 353.181 439.287 361 436C360.654 435.087 360.654 435.087 360.301 434.156C358.336 428.867 357.261 424.631 358 419C361.476 413.091 366.652 410.343 373 408C380.247 406.965 387.752 409.436 393.875 413.313C395.422 414.148 395.422 414.148 397 415C400.369 413.875 402.188 411.866 404.5 409.25C419.661 393.634 443.133 395.178 460 407.125Z"
            fill="#99E79C"
          />
          <path
            d="M436 248C436.33 248 436.66 248 437 248C440.338 335.219 440.338 335.219 410.5 369.312C396.819 383.898 379.412 393.498 362 403C361.385 403.349 360.77 403.697 360.137 404.057C357.789 405.093 356.222 405.254 353.668 405.263C352.372 405.274 352.372 405.274 351.049 405.286C349.631 405.284 349.631 405.284 348.185 405.281C347.177 405.287 346.169 405.293 345.131 405.299C341.744 405.316 338.358 405.319 334.971 405.322C332.546 405.332 330.122 405.342 327.697 405.352C321.102 405.379 314.507 405.392 307.911 405.4C303.79 405.406 299.668 405.414 295.547 405.423C284.127 405.448 272.707 405.468 261.288 405.475C260.557 405.476 259.826 405.476 259.073 405.476C258.341 405.477 257.608 405.477 256.853 405.478C255.369 405.479 253.885 405.48 252.4 405.48C251.296 405.481 251.296 405.481 250.169 405.482C238.253 405.49 226.337 405.525 214.422 405.571C202.177 405.619 189.932 405.644 177.687 405.646C170.816 405.648 163.946 405.659 157.075 405.696C150.607 405.73 144.14 405.733 137.672 405.715C135.303 405.714 132.934 405.722 130.566 405.742C107.566 405.923 107.566 405.923 98 399C98.495 398.01 98.495 398.01 99 397C101.857 396.337 104.621 395.826 107.517 395.403C108.409 395.272 109.301 395.141 110.22 395.006C121.366 393.512 132.501 393.559 143.727 393.559C146.054 393.547 148.381 393.533 150.708 393.519C156.781 393.483 162.853 393.462 168.925 393.447C178.646 393.422 188.367 393.382 198.088 393.325C201.445 393.309 204.802 393.305 208.16 393.302C224.089 393.248 239.657 392.441 255.188 388.625C256.586 388.292 256.586 388.292 258.013 387.952C259.855 387.51 261.695 387.062 263.535 386.608C265.625 386.092 267.72 385.595 269.816 385.102C292.616 379.447 314.485 370.298 336 361C336.86 360.63 337.72 360.26 338.605 359.879C350.687 354.626 361.866 348.018 373 341C373.807 340.494 374.614 339.988 375.446 339.466C402.246 322.539 421.678 299.156 428.995 267.809C429.405 265.983 429.799 264.153 430.177 262.32C431.348 256.844 432.962 252.717 436 248Z"
            fill="#FE9432"
          />
          <path
            d="M332 175C341.205 184.798 345.78 198.658 345.524 211.937C344.672 228.084 338.887 242.792 327 254C313.224 265.542 297.616 269.03 280.063 267.793C264.648 265.928 252.432 257.181 242.875 245.375C233.6 231.942 232.237 218.758 233 203C247.048 195.962 261.007 189.723 276 185C276.729 184.766 277.458 184.532 278.209 184.291C320.567 170.775 320.567 170.775 332 175Z"
            fill="#010101"
          />
          <path
            d="M101.469 173.711C102.818 173.897 104.162 174.121 105.5 174.375C106.238 174.491 106.977 174.607 107.738 174.726C109.334 174.984 110.928 175.259 112.519 175.548C115 176 117.486 176.403 119.977 176.801C146.533 181.246 172.114 190.689 196 203C196.054 205.834 196.094 208.666 196.125 211.5C196.142 212.291 196.159 213.083 196.176 213.898C196.298 228.852 189.901 241.323 179.973 252.227C167.782 263.986 152.128 268.401 135.582 268.207C120.586 267.34 107.038 260.064 97 249C85.7585 234.371 82.3028 219.153 84.4609 201.156C85.9365 193.31 88.5112 186.619 93 180C93.3452 179.453 93.6903 178.906 94.0459 178.342C96.3432 175.077 97.4407 174.047 101.469 173.711Z"
            fill="#010101"
          />
          <path
            d="M71.4526 171.947C74.9272 172.059 78.4012 172.178 81.875 172.312C83.6906 172.366 83.6906 172.366 85.543 172.42C86.7018 172.463 87.8607 172.506 89.0547 172.551C90.6555 172.607 90.6555 172.607 92.2886 172.665C95 173 95 173 98 175C97.5411 175.617 97.0822 176.235 96.6094 176.871C86.6608 190.603 83.0494 205.037 85 222C88.5222 236.905 96.5443 249.848 109.289 258.363C122.984 266.632 137.733 269.474 153.508 265.75C167.655 261.493 180.255 254.021 187.758 240.934C189.256 237.984 190.671 235.029 192 232C192.364 231.18 192.727 230.36 193.102 229.516C195.11 223.891 195.257 218.035 195.562 212.125C195.606 211.341 195.649 210.558 195.693 209.75C195.799 207.833 195.9 205.917 196 204C200.292 205.646 204.046 207.674 208 210C209.199 227.885 202.394 246.287 190.832 259.988C190.227 260.652 189.623 261.316 189 262C187.985 263.135 187.985 263.135 186.949 264.293C173.65 278.396 154.56 286.836 135.219 287.475C112.929 287.677 93.8513 279.502 78 264C62.3347 247.909 57.3841 227.173 57.6523 205.414C57.9269 197.586 61.7712 172.158 71.4526 171.947Z"
            fill="#FDFCFB"
          />
          <path
            d="M360 172C370.673 191.977 374.812 211.625 368.379 233.941C361.853 254.122 348.847 269.376 330.063 279.313C310.738 288.442 290.168 289.556 269.922 283.004C250.43 275.631 235.168 260.436 226.473 241.711C223.54 234.588 221.826 227.647 221 220C220.847 219.089 220.693 218.177 220.535 217.238C220.234 214.481 220.129 212.64 221 210C224.269 207.05 228.449 204 233 204C233.014 205.125 233.028 206.251 233.043 207.41C233.474 224.235 237.519 238.903 249.125 251.688C258.491 260.442 270.187 266.226 283 267C284.29 267.097 284.29 267.097 285.605 267.195C300.18 267.785 314.171 263.273 325.688 254.313C337.627 243.289 343.609 228.35 344.386 212.361C344.726 198.966 340.375 188.01 332.574 177.195C331 175 331 175 331 174C340.729 172.601 350.142 171.696 360 172Z"
            fill="#FDFCFB"
          />
          <path
            d="M390 411C397.863 415.186 406.05 421.576 411 429C412.005 434.354 411.51 438.94 408.688 443.625C403.183 450.964 394.933 456.839 386 459C381.771 459.029 378.173 458.587 374.375 456.688C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.154 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C134.302 463.493 134.302 463.493 113 459C113 458.67 113 458.34 113 458C151.797 454.899 190.56 454.549 229.461 454.393C233.859 454.375 238.256 454.349 242.654 454.324C245.69 454.309 248.727 454.305 251.764 454.302C262.617 454.26 273.214 453.677 283.975 452.258C286.848 451.892 289.727 451.586 292.608 451.281C300.614 450.414 308.492 449.127 316.387 447.524C319.587 446.882 322.792 446.267 325.996 445.648C328.56 445.142 331.124 444.634 333.688 444.125C334.899 443.893 336.11 443.66 337.358 443.421C345.677 441.74 353.181 439.287 361 436C360.654 435.087 360.654 435.087 360.301 434.156C358.336 428.867 357.261 424.631 358 419C365.062 406.994 378.151 406.187 390 411Z"
            fill="#86D890"
          />
          <path
            d="M37.043 347.41C39.822 346.96 41.3439 346.986 44 348C46.6509 351.235 48.6609 354.639 50.75 358.25C55.6061 366.613 64.2244 376.612 73 381C74.0795 392.323 70.9552 405.17 64.3008 414.523C59.2549 420.251 52.6744 421.604 45.3686 422.223C42.5971 422.339 39.8364 422.371 37.0625 422.375C36.1376 422.399 35.2127 422.424 34.2598 422.449C26.9577 422.48 19.7827 421.254 14.0849 416.353C6.78766 408.671 5.66315 398.517 5.78905 388.344C6.51673 376.809 9.52246 363.658 18.3125 355.5C24.0099 351.208 30.3185 349.352 37.043 347.41Z"
            fill="#00CBFE"
          />
          <path
            d="M437 224C450.913 223.157 466.919 224.485 478 234C483.308 239.165 485.108 246.13 485.398 253.375C485.406 255.25 485.398 257.125 485.375 259C485.387 259.933 485.398 260.867 485.41 261.828C485.372 270.929 483.555 278.598 477.109 285.27C468.554 292.288 457.828 291.518 447.364 291.291C444.127 290.893 441.114 289.946 438 289C436.806 243.604 436.806 243.604 437 224Z"
            fill="#00CBFE"
          />
          <path
            d="M390 411C397.863 415.186 406.05 421.576 411 429C412.005 434.354 411.51 438.94 408.688 443.625C403.183 450.964 394.933 456.839 386 459C381.231 459.032 377.14 458.461 373 456C367.487 449.593 364.393 441.664 361 434C360.574 433.067 360.574 433.067 360.14 432.115C357.935 427.191 357.324 424.32 358 419C365.063 406.994 378.151 406.187 390 411Z"
            fill="#73C884"
          />
          <path
            d="M212.688 317.562C213.379 317.565 214.071 317.568 214.784 317.571C230.395 317.663 250.721 318.405 263.312 328.934C265 331 265 331 265 334.562C264 338 264 338 262.375 340C258.96 341.438 256.443 341.038 253 340C250.182 338.814 247.405 337.577 244.648 336.254C234.913 332.908 224.701 332.68 214.5 332.75C212.82 332.738 212.82 332.738 211.105 332.727C200.848 332.75 190.619 333.432 181.125 337.562C172.412 341.094 172.412 341.094 168 341C165.562 339.437 165.562 339.437 164 337C163.5 334 163.5 334 164 331C166.937 327.418 170.097 325.761 174.312 323.937C175.402 323.452 176.491 322.966 177.613 322.465C188.961 318.296 200.703 317.452 212.688 317.562Z"
            fill="#050301"
          />
          <path
            d="M250 7C255.31 11.97 259.878 17.5601 260.625 25C260.47 28.3879 259.614 29.9041 257.125 32.1875C249.235 37.9904 240.885 41.6225 231 42C225.733 40.8957 223.638 38.8506 220.687 34.5625C219.76 33.0608 218.862 31.5402 218 30C217.622 29.3361 217.245 28.6723 216.855 27.9883C214.839 23.3011 215.43 18.4544 217.25 13.8125C225.261 5.61894 239.601 0.0748537 250 7Z"
            fill="#00CCFE"
          />
          <path
            d="M31 29C35.8046 29.4394 38.5485 29.9246 42.0625 33.25C50.4525 40.4452 60.4453 45.5244 70 51C69.2734 55.7871 69.2734 55.7871 66.8125 57.7031C65.8844 58.2136 64.9562 58.7241 64 59.25C55.7234 64.1924 49.7119 70.9904 43.5078 78.2734C43.0102 78.8432 42.5126 79.413 42 80C41.523 80.5698 41.0461 81.1395 40.5547 81.7266C39 83 39 83 35 83C27.7119 68.4239 30.8749 44.738 31 29Z"
            fill="#FEAFDB"
          />
          <path
            d="M434.648 29.4094C435.812 29.7018 435.812 29.7018 437 30C437.335 43.2394 437.138 56.2683 435.625 69.4375C435.499 70.562 435.373 71.6866 435.243 72.8452C434.263 80.7373 434.263 80.7373 432 83C427.931 82.7996 425.901 80.2369 423.188 77.4375C422.304 76.5326 421.421 75.6277 420.512 74.6953C418.423 72.4536 416.449 70.174 414.5 67.8125C410.65 63.2938 405.953 60.2041 401 57C400.01 56.34 399.02 55.68 398 55C398.456 50.4483 398.456 50.4483 400.851 48.4736C401.649 48.0544 402.447 47.6351 403.27 47.2031C404.153 46.7232 405.037 46.2433 405.947 45.7488C406.893 45.2542 407.838 44.7596 408.812 44.25C416.35 40.1663 423.088 36.0231 429.625 30.4492C432 29 432 29 434.648 29.4094Z"
            fill="#FEAFDA"
          />
          <path
            d="M341.875 111.688C345.379 112.038 346.735 112.3 349 115C349.562 118.375 349.562 118.375 349 122C347.353 124.196 346.133 125.371 344 127C342.995 127.835 342.995 127.835 341.969 128.688C329.331 138.461 313.646 140.972 298 140C293.721 139.015 291.496 137.744 289 134C289.188 130.438 289.188 130.438 290 127C293.153 124.898 293.668 124.773 297.211 124.945C298.037 124.973 298.864 125.001 299.715 125.029C301.032 125.077 301.032 125.077 302.375 125.125C315.912 125.339 326.031 122.112 337 114C339 112 339 112 341.875 111.688Z"
            fill="#050301"
          />
          <path
            d="M90 112C92.3996 113.577 94.5407 115.337 96.7383 117.184C106.356 124.908 116.355 125.257 128.17 124.746C135.401 124.579 135.401 124.579 138.641 126.855C140.382 129.603 140.701 130.807 140 134C137.458 137.39 135.952 138.819 131.75 139.617C112.649 141.567 98.5385 137.569 83.2617 125.91C81 124 81 124 80 122C79.5505 115.82 79.5505 115.82 81.0625 113.063C84.357 111.256 86.2783 111.4 90 112Z"
            fill="#050301"
          />
          <path
            d="M488.453 489.133C488.964 489.419 489.474 489.705 490 490C487.967 494.601 485.726 497.629 482 501C480.948 501.99 480.948 501.99 479.875 503C469.346 510.325 458.265 512.385 445.688 512.313C444.671 512.307 443.654 512.301 442.606 512.295C430.171 512.094 418.043 509.675 408.688 500.809C408.131 500.212 407.574 499.615 407 499C407.804 499.325 407.804 499.325 408.625 499.656C427.432 506.338 451.266 500.857 469 493C471.178 491.833 473.345 490.647 475.5 489.438C480.538 486.744 483.287 486.77 488.453 489.133Z"
            fill="#87D890"
          />
          <path
            d="M483 249C483.66 249 484.32 249 485 249C485.088 252.312 485.141 255.624 485.188 258.938C485.213 259.864 485.238 260.79 485.264 261.744C485.36 270.933 483.624 278.526 477.109 285.27C468.611 292.241 457.618 291.719 447.182 291.229C443.951 290.89 441.077 290.028 438 289C438 287.35 438 285.7 438 284C438.908 283.752 439.815 283.505 440.75 283.25C442.168 282.838 443.584 282.42 445 282C445.919 281.732 446.838 281.464 447.785 281.188C461.196 277.035 471.577 270.584 478.402 258.086C479.984 255.08 481.506 252.051 483 249Z"
            fill="#2AB4F2"
          />
          <path
            d="M279 191C280.875 192.125 280.875 192.125 282 194C282.66 200.159 282.66 200.159 280.742 202.604C278.801 204.159 277.079 204.955 274.754 205.832C273.922 206.153 273.09 206.474 272.233 206.805C271.352 207.137 270.471 207.47 269.562 207.812C263.592 210.113 257.829 212.478 252.188 215.5C247.774 217.778 244.928 219.027 240 218C237.186 216.052 236.207 214.896 235.438 211.562C236.257 207.829 238.137 206.503 241 204C243.537 202.48 246.174 201.263 248.875 200.062C249.617 199.725 250.358 199.388 251.122 199.041C253.408 198.012 255.703 197.004 258 196C258.712 195.683 259.425 195.365 260.159 195.038C262.161 194.152 264.171 193.29 266.188 192.437C267.941 191.693 267.941 191.693 269.73 190.934C273.324 189.908 275.42 190.039 279 191Z"
            fill="#F8F8F8"
          />
          <path
            d="M479 140C483.798 142.546 486.982 145.561 490 150C490.716 153.821 490.236 155.527 488.5 159C484.943 163.269 481.295 167.264 475.691 168.516C470.343 168.768 467.156 167.495 463 164C462.031 163.237 461.061 162.474 460.062 161.687C458 159 458 159 457.688 155.75C459.953 149.277 464.448 144.684 470.125 140.937C473.418 139.864 475.561 139.499 479 140Z"
            fill="#00CCFE"
          />
          <path
            d="M502 429C502.66 429 503.32 429 504 429C503.302 436.384 499.269 440.113 494 445C481.986 454.196 468.121 456.182 453.438 456.25C452.314 456.271 451.191 456.291 450.033 456.312C448.948 456.318 447.864 456.323 446.746 456.328C445.763 456.337 444.78 456.347 443.767 456.356C440.458 455.93 438.645 455.019 436 453C434.688 450.812 434.688 450.812 434 449C434.602 448.991 435.205 448.981 435.826 448.972C458.702 448.529 484.845 446.155 502 429Z"
            fill="#87D991"
          />
          <path
            d="M105.937 176.625C109.38 177.047 110.767 177.337 113 180C113.727 183.637 113.568 185.976 111.754 189.246C110.21 191.529 108.609 193.763 107 196C104.442 200.453 103.103 204.882 101.844 209.828C101 212 101 212 98 214C94.4227 214.457 92.6654 214.438 89.625 212.438C87.4058 209.109 87.2435 206.809 88 203C90.4048 194.849 96.0378 177.889 105.937 176.625Z"
            fill="#F8F8F8"
          />
          <path
            d="M61 372C63.6667 374 66.3333 376 69 378C69.736 378.517 70.4719 379.033 71.2302 379.566C73 381 73 381 73.5664 383.137C73.5497 394.073 70.3861 407.616 63 416C57.0309 421.155 49.7287 422.396 42 422C45.0563 418.689 48.4349 416.15 52.0977 413.562C57.5937 409.048 58.631 403.54 59.3408 396.73C59.6413 392.989 59.8927 389.247 60.125 385.5C60.2114 384.201 60.2977 382.901 60.3867 381.562C60.5976 378.375 60.8019 375.188 61 372Z"
            fill="#2BB4F1"
          />
          <path
            d="M409 429C409.66 429 410.32 429 411 429C411.76 435.741 411.152 440.339 407.035 445.828C401.3 451.949 394.196 457.017 386 459C381.263 459.031 377.088 458.505 373 456C371.516 454.344 371.516 454.344 370.25 452.5C369.608 451.587 369.608 451.587 368.953 450.656C368 449 368 449 368 447C368.844 446.919 368.844 446.919 369.706 446.836C389.089 445.01 389.089 445.01 405.113 434.766C406.753 432.634 406.753 432.634 407.984 430.504C408.32 430.008 408.655 429.511 409 429Z"
            fill="#62B876"
          />
          <path
            d="M66 49C68.4375 49.75 68.4375 49.75 70 51C69.8125 53.2969 69.8125 53.2969 69 56C66.8125 57.7031 66.8125 57.7031 64 59.25C55.7234 64.1924 49.7119 70.9904 43.5078 78.2734C43.0102 78.8432 42.5126 79.413 42 80C41.2846 80.8546 41.2846 80.8546 40.5547 81.7266C39 83 39 83 35 83C33.4452 79.8905 33.7135 77.4373 34 74C35.5625 71 35.5625 71 38 68C38.4396 67.456 38.8791 66.912 39.332 66.3516C44.7716 60.2648 51.9167 56.8341 59 53C59.6304 52.6192 60.2609 52.2385 60.9104 51.8462C62.5746 50.8419 64.2849 49.9148 66 49Z"
            fill="#FE9ACF"
          />
          <path
            d="M250 9C255.476 11.1667 257.638 15.8533 260 21C260.931 24.2954 260.762 25.4813 260 29C255.428 35.1393 247.071 38.6432 240 41C237.667 41.0395 235.333 41.044 233 41C236.771 37.8376 240.727 35.2252 244.914 32.6602C247.967 30.2302 249.771 27.9841 250.23 24.0056C250.295 21.7248 250.262 19.4679 250.188 17.1875C250.174 16.3992 250.16 15.611 250.146 14.7988C250.111 12.8656 250.058 10.9327 250 9Z"
            fill="#28B6F3"
          />
          <path
            d="M488 148C490 150 490 150 490.375 152.75C489.717 158.45 486.548 161.774 482.312 165.375C478.471 168.136 475.544 168.577 470.883 168.309C469 168 469 168 467 167C468.448 163.29 470.076 162.129 473.562 160.312C479.31 157.058 483.553 152.834 488 148Z"
            fill="#29B5F3"
          />
          <path
            d="M414 66C416.407 66.9319 418.784 67.8995 421.125 68.9883C425.431 70.9886 429.217 72.5094 434 73C434.195 79.0547 434.195 79.0547 434 81C433.34 81.66 432.68 82.32 432 83C426.836 82.7663 423.702 78.0346 420.352 74.5898C417.857 71.8422 415.854 69.2021 414 66Z"
            fill="#FE9BCE"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_3">
            <rect width="512" height="512" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}

export default AngryCat;
