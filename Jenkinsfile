
pipeline {
    agent any

    stages {
        stage('Check Project') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Recipe Finder Build SUCCESS!'
        }
        failure {
            echo 'Build failed. Check Console Output.'
        }
    }
}
